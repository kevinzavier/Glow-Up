// Get all of our friend data
var data = require('../data.json');
var output = require('../output.json');

exports.view = function(req, res){
	console.log("starting getting info from data file");
	console.log(data);

	var time = res.query.time;
	var occasion = res.query.occasion;
	var style = res.query.style;

	if(time=="day" && style=="edgy") {
		var result = output.result1;
	} else if (time=="day" && style=="casual") {
		var result = output.result2;
	} else if (time=="day" && style=="rogue") {
		var result = output.result3;
	} else if (time=="day" && style=="glamorous") {
		var result = output.result4;
	} else if (time=="day" && style=="classic") {
		var result = output.result5;
	} else if (time=="day" && style=="natural") {
		var result = output.result6;
	} else if(time=="night" && style=="edgy") {
		var result = output.result7;
	} else if (time=="night" && style=="casual") {
		var result = output.result8;
	} else if (time=="night" && style=="rogue") {
		var result = output.result9;
	} else if (time=="night" && style=="glamorous") {
		var result = output.result10;
	} else if (time=="night" && style=="classic") {
		var result = output.result11;
	} else if (time=="night" && style=="natural") {
		var result = output.result12;
	}
	
	res.render('glowup', result);
};
