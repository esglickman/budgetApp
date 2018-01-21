var mysql = require('mysql');
var express = require('express');
var path = require('path');
var app = express();
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'main.html'));
})
app.use('/assets', express.static(path.join(__dirname, '/assets')));

 
app.listen(3000);


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : 3306,
  password : '',
  database : 'BudgetApp'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    console.log('error is:' + err.message);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
