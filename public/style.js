$(document).ready(function() {
	//alert("hello");
	$(".btn.style").click(function(e) {
		
		var clickedButton = $(e.target);
		var text = clickedButton.text();
		if(text != "") {
			localStorage.setItem('style', text);
			alert(text);
		}
		e.stopPropagation();
	});
});