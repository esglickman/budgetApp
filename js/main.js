var id = 1;
var total = 0;


//make a function to add or subtract total and call in in function test()

function test() {
	var operator;
	//checks to see if it is a positive to total or negative
	var depwit= $('#depositYes').is(":checked");
	id++;

	console.log(depwit);

	if (depwit != true) {
	//Withdrawal


		$('#tableDiv').prepend("<tr> <td>" + id + "</td><td>" + $('#inputName').val() + "</td><td>" + "-" + " " + $('#moneyAmount').val() + "</td><td>" + "$" + math.withdraw($('#moneyAmount').val()) + "</td><td> Dec 16, 2017</td></tr>");
	} else {
	//Deposit
		console.log("it be false");

		$('#tableDiv').prepend("<tr> <td>" + id + "</td><td>" + $('#inputName').val() + "</td><td>" + "+" + " " + $('#moneyAmount').val() + "</td><td>" + "$" + math.deposit($('#moneyAmount').val()) + "</td><td> Dec 16, 2017</td></tr>");
	}


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



