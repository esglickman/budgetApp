// var con = require('connection.js');

       $(document).ready(function(){
        
        $.ajax({ type: "GET",   
                 url: "/main.html",
                 success : function(text) {
                     console.log(text);
                 }
        });

      
       });


var id = 0;
var total = 0;
var increase = true;
var table = $('#tableDiv');
//create reference


//make a function to add or subtract total and call in in function test()

function test(e) { 
	// e.preventDefault();
	
	var operator;
	//checks to see if it is a positive to total or negative
	var transaction= $('#depositYes').is(":checked");
	console.log("REEEEE: " + transaction)
	id++;

	console.log(transaction);

	if (transaction != true) {
		transaction = 0;
	//Withdrawal
		total = math.withdraw($('#moneyAmount').val());
		
		
	} else {
	//Deposit
		transaction = 1;
		console.log("it be false");
		total = math.deposit($('#moneyAmount').val());
	}

	console.log(total);

		var DBObject = {

			Name: $('#inputName').val(),
			Increase: transaction,
			Payment: $('#moneyAmount').val(),
			Total: total

		};

	$.ajax({
			type: 'POST',
			url:'dank.html',
			data: DBObject,
			success: function(newOrder) {
				
				console.log('success!');
				if (DBObject.Increase == 0) {
					$('#tableDiv').prepend("<tr> <td>" + id + "</td><td>" + $('#inputName').val() + "</td><td>" + "-" + " " + $('#moneyAmount').val() + "</td><td>" + "$" + DBObject.Total + "</td><td> Dec 16, 2017</td></tr>");
				} else if (DBObject.Increase == 1) {
					$('#tableDiv').prepend("<tr> <td>" + id + "</td><td>" + $('#inputName').val() + "</td><td>" + "+" + " " + $('#moneyAmount').val() + "</td><td>" + "$" + DBObject.Total + "</td><td> Dec 16, 2017</td></tr>");
				}
			},
			error: function(jqXHR, textStatus, err) {
                alert('text status '+textStatus+', err '+err)
            }
		})

		

}


$("#submitButton").on("click", function() {
	console.log('this starting aye');
	var DBObject = {

			Name: $('#inputName').val(),
			Increase: $('#depositYes').is(":checked"),
			Payment: $('#moneyAmount').val(),
			Total: total

		};

	$.ajax({
			type: 'POST',
			url: '/dank',
			data: DBObject,
			success: function(newOrder) {
				console.log('success!');
			},
			error: function(jqXHR, textStatus, err) {
                alert('text status '+textStatus+', err '+err)
            }
		})
})


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
