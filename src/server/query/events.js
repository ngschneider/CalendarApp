let mysql = require('mysql');
export.select = () => {
var con = mysql.createConnection(
	{
		host: "localhost",
		user: "ngschneider",
		password: "Schneider@13310",
		database: "CalendarEvent"
	}
);

con.connect(function(err){

	if(err) throw err;
	console.log("connected!");
	con.query("SELECT * FROM events", function(err, result, fields){
		if(err) throw err;
		console.log(results)
	});

});
}
