var data = require("../data.json");

console.log("javascript connected");

$(document).ready(function() {
	var time = localStorage.getItem('time');
	var style = localStorage.getItem('style');
	var occasion = localStorage.getItem('occasion');

	var preferences = {
			time: time,
			occasion: occasion,
			style: style
		}



	data.friends.push(time);
	data.friends.push(style);
	data.friends.push(occasion);



	//console.log("time is: " + time);
	//console.log("style is: " + style);
	//console.log("occasion is: " + occasion);



});
