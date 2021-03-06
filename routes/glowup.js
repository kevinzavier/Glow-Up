'use strict';
// Get all of our friend data
var output = require('../output.json');
var data = require('../data.json');
var first = true;

// trying to do google analytics
function initializePage() {
	console.log("initializing");
}

exports.view = function(req, res){


	var time = req.query.time;
	var style = req.query.style;
	var occasion = req.query.occasion;
	console.log("time " + time);
	console.log("style " + style);
	console.log("time " + time);



	var result;

	if(time=="day" && style=="edgy") {
		result = output.result1;
	} else if (time=="day" && style=="casual") {
		result = output.result2;
	} else if (time=="day" && style=="rogue") {
		result = output.result3;
	} else if (time=="day" && style=="glamorous") {
		result = output.result4;
	} else if (time=="day" && style=="classic") {
		result = output.result5;
	} else if (time=="day" && style=="natural") {
		result = output.result6;
	} else if(time=="night" && style=="edgy") {
		result = output.result7;
	} else if (time=="night" && style=="casual") {
		result = output.result8;
	} else if (time=="night" && style=="rogue") {
		result = output.result9;
	} else if (time=="night" && style=="glamorous") {
		result = output.result10;
	} else if (time=="night" && style=="classic") {
		result = output.result11;
	} else if (time=="night" && style=="natural") {
		result = output.result12;
	} else {
		result = output.default;
	}

	res.render('glowup', {
		'title': result.title,
		'imageURL': result.imageURL,
		'steps': result.steps,
		'videoURL': result.videoURL
	});
};
