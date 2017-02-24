var data = require("../data.json");

exports.addData = function(req, res) { 
	// Your code goes here
	console.log("addData called");

	var time = req.query.time;
	var occasion = req.query.occasion;
	var style = req.query.style;

	var newData = {
		"time": time,
		"occasion": occasion,
		"style": style
	}
	
	data.input.push(newData);
 }
