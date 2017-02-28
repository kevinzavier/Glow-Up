$(document).ready(function() {
	var back = localStorage.getItem('back');
	if(back=='true'){
		showOccasion();
		showStyle();
	}

	$("#style").click(function(e) {

		var text = $(e.target).text();
		if(text != "") {
			localStorage.setItem('style', text);
		}
    var style = localStorage.getItem('style');

    console.log(style);

	});
  $("#time").click(function(e) {

    var text = $(e.target).text();
    if(text != "") {
      localStorage.setItem('time', text);
    }
    var time = localStorage.getItem('time');

    console.log(time);

  });
  $("#occasion").click(function(e) {

    var text = $(e.target).text();
    if(text != "") {
      localStorage.setItem('occasion', text);
    }
    var occasion = localStorage.getItem('occasion');

    console.log(occasion);

  });
});
