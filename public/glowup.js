$(document).ready(function() {
	var style = localStorage.getItem('style');
	$("#header-title").text("Your " + style + " Look");
});