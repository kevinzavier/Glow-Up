// Get all of our friend data
var output = require('../output.json');

exports.view = function(req, res){
	console.log("starting getting info from data file");

	var time = "day";
	var style = "edgy";
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

	console.log(result);

	res.render('glowup', {
		'title': result.title,
		'imageURL': result.imageURL,
		'steps': result.steps,
		'videoURL': result.videoURL
	});
};
