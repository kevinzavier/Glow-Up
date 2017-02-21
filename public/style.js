$(document).ready(function() {
	$(".btn.style").click(function(e) {
		
		var text = $(e.target).text();
		if(text != "") {
			localStorage.setItem('style', text);
		}

	});
});