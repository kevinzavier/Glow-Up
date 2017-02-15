var data = require("data.json");

exports.addData = function(req, res) {    
	// Your code goes here
	console.log("addData called");

	var foundation = req.query.foundation;
	var concealer = req.query.concealer;
	var eyeliner = req.query.eyeliner;
	var blush = req.query.blush;
	var mascara = req.query.mascara;
	var lipstick = req.query.lipstick;
	var eyeshadow = req.query.eyeshadow;
	var time = req.query.time;
	var occasion = req.query.occasion;
	var style = req.query.style;

	var newData = {
		'foundation': foundation,
		'concealer': concealer,
		'eyeliner': eyeliner,
		'blush': blush,
		'mascara': mascara,
		'lipstick': lipstick,
		'eyeshadow': eyeshadow,
		'time': time, 
		'occasion': occasion,
		'style': style
	}

	data.input.push(newData);
 }