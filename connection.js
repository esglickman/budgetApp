var mysql = require('mysql');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/assets', express.static(path.join(__dirname, '/assets'))); 

app.listen(3001);


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

//get req when page loads
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'main.html'));

})

app.get('/main.html', function(req, res) {
  
  var query = connection.query('SELECT * FROM budgetData;', function (error, results, fields) {
    
    res.json(results);
    if (error) throw error;
    console.log('The solution is: ', error);
  });

  // JSON.strigify(query);
  // res.send(query);
})

//ajax post
app.post('/dank.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'main.html'));




  connection.query('INSERT INTO budgetData (Name, Increase, Payment, Total) VALUES (?, ?, ?, ?);', [req.body.Name, parseInt(req.body.Increase), req.body.Payment, req.body.Total] ,function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', error);
  console.log('good stuff this is the results:' + results);

});


})


