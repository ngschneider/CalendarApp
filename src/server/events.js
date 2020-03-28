var mysql = require('mysql');
exports.select = (cb) => {
var responce = [];
var con = mysql.createConnection(
	{
		host: "ec2-3-17-28-162.us-east-2.compute.amazonaws.com",
		user: "rmmysqlschneider",
		password: "schneider",
		database: "techCalendar",
		stringifyObjects: "true"
	}
);

con.connect(function(err){

	if(err) throw err;
	console.log("connected!");
	var typeSQL ="select * from events";
	con.query(typeSQL, function(err, result, fields){
		if (err)  throw err;;
		if (result.length){
			for(var i = 1; i <= result.length;i++){
			responce.push(result);
			};
		}
		cb(result);	
//		console.log(result);
//		console.log(fields)
	//	console.log(result.recordset)
	
	});


});
console.log("test");
console.log(responce.pop());
return "123 123 123 123";
}
