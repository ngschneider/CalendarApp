const express = require('express');
const path = require('path');
const router = express.Router();
const sql = require('./events')
var resultset = '';
router.get('/', (req,res) => {
	res.sendFile(path.join('/home/ngschneider/calendarApp/CalendarApp/src/client/src/index.js'));

});
router.get('/where', (req,res) => {
   	 sql.select(function(result){
//	console.log(result[0]);
	
//	var strSplit = result.toString();
//	strSplit = strSplit.split("}");
	result.map( (element) => {
	console.log("split:");
	console.log(element.id);
//	console.log(element)
	});
//	 resultset = JSON.parse(result);
	console.log(resultset);
}) ;
	var loopedItem = "";
	//responce.forEach(element => loopedItem += element + "");
	//console.log("  asdf  " + loopedItem);
    	res.send('<p>'   + '<p>');
});

module.exports = router;
