// var con = require('connection.js');


var id = 0;
var total = 0;
var increase = true;
var table = $('#tableDiv');
//create reference


//make a function to add or subtract total and call in in function test()

function test() { 
	var operator;
	//checks to see if it is a positive to total or negative
	var depwit= $('#depositYes').is(":checked");
	id++;

	console.log(depwit);

	if (depwit != true) {
	//Withdrawal
		total = math.withdraw($('#moneyAmount').val());
		$('#tableDiv').prepend("<tr> <td>" + id + "</td><td>" + $('#inputName').val() + "</td><td>" + "-" + " " + $('#moneyAmount').val() + "</td><td>" + "$" + math.withdraw($('#moneyAmount').val()) + "</td><td> Dec 16, 2017</td></tr>");
	} else {
	//Deposit
		console.log("it be false");
		total = math.deposit($('#moneyAmount').val());
		$('#tableDiv').prepend("<tr> <td>" + id + "</td><td>" + $('#inputName').val() + "</td><td>" + "+" + " " + $('#moneyAmount').val() + "</td><td>" + "$" + math.deposit($('#moneyAmount').val()) + "</td><td> Dec 16, 2017</td></tr>");
	}

	console.log(total);
	// connection.query('INSERT INTO budgetData SET ?',
	// 	{
	// 		Name: $('#inputName').val(),
	// 		Increase: $('#depositYes').is(":checked"),
	// 		Payment: $('#moneyAmount').val(),
	// 		Total: 
	// 	}, 
	// 	function (error, results, fields) {
	//   if (error) throw error;
	//   // ...
	// });


}

var math = {

	deposit : function(amount) {
		amount = parseInt(amount, 10);

		total = (total + amount);
		return total;
	},
	withdraw : function(amount) {
		amount = parseInt(amount, 10);

		total = (total - amount);
		return total;
	}

};


// con.query('INSERT INTO budgetData SET ?',
// 	{
// 		Name: $('#inputName').val(),
// 		Increase: $('#depositYes').is(":checked"),
// 		Payment: $('#moneyAmount').val(),
// 		Total: 
// 	}, 
// 	function (error, results, fields) {
//   if (error) throw error;
//   // ...
// });
