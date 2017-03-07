var first = true;

$(document).ready(function() {
  console.log("javascript connected");
  localStorage.setItem('back', 'false');
  initializePage()
});


// trying to do google analytics
function initializePage() {
	$("#Look").click(lookClick);
	$("#Browse").click(browseClick);
	console.log("initializing");

}

function lookClick(e) { 
    // prevent the page from reloading      
    // e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    //ga("send", "event", 'look'+first, 'click');
    if(first) ga("send", "event", 'home', 'click', 'look');
    first = false;
    console.log("look");
}

function browseClick(e) { 
    // prevent the page from reloading      
    // e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
   if(first) ga("send", "event", 'home', 'click', 'browse');
    first = false;
    console.log("browse");
}

// function lookClick(e) { 
//     // prevent the page from reloading      
//     e.preventDefault();
//     // In an event handler, $(this) refers to      
//     // the object that triggered the event      
//     //ga("send", "event", 'look'+first, 'click');
//     ga("send", "event", 'look', 'click');
//     first = false;
//     console.log("look");
// }
// function browseClick(e) { 
//     // prevent the page from reloading      
//     e.preventDefault();
//     // In an event handler, $(this) refers to      
//     // the object that triggered the event      
//    ga("send", "event", 'browse', 'click');
//     first = false;
//     console.log("browse");
// }
// exports.getLooks = function(req, res){
//   	res.render('glowup', projects);
//   	projects["first"] = true;
// };

// exports.browseAll = function(req,res){
// 	res.render('browse', projects);
// 	projects["first"] = true;
// };