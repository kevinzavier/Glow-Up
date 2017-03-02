var output = require('./output.json');
var browse = require('./browse.json');
var express = require('express');
var fs = require('fs');
var handlebars = require('express3-handlebars')

var index = require('./routes/style');
var glowup = require('./routes/glowup');

var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('signin')
});


// Add routes here
//app.get('/', index.view);
//app.get('/add', results.addData);

app.get('/profile', function (req, res) {
  res.render('profile')
})

app.get('/time', function (req, res) {
  res.render('time')
})



app.get('/occasion', function (req, res) {
  res.render('occasion')
})


app.get('/glowup', function (req, res) {

  var time = req.query.time;
  var style = req.query.style;
  var occasion = req.query.occasion;
  console.log("time" + time + "!");
  console.log("style" + style + "!");
  console.log("occasion" + occasion);

  var link;
  if(occasion=="null"){
    link = "/browse"
  }
  else{
    link = "/time"
  }



  var result;

  if(time==" Day" && style==" Edgy") {
    result = output.result1;
  } else if (time==" Day" && style==" Casual") {
    result = output.result2;
  } else if (time==" Day" && style==" Rogue") {
    result = output.result3;
  } else if (time==" Day" && style==" Glamorous") {
    result = output.result4;
  } else if (time==" Day" && style==" Classic") {
    result = output.result5;
  } else if (time==" Day" && style==" Natural") {
    result = output.result6;
  } else if(time==" Night" && style==" Edgy") {
    result = output.result7;
  } else if (time==" Night" && style==" Casual") {
    result = output.result8;
  } else if (time==" Night" && style==" Rogue") {
    result = output.result9;
  } else if (time==" Night" && style==" Glamorous") {
    result = output.result10;
  } else if (time==" Night" && style==" Classic") {
    result = output.result11;
  } else if (time=="Night" && style==" Natural") {
    result = output.result12;
  } else {
    result = output.default;
  }
  console.log(result);

  res.render('glowup', {
    'title': result.title,
    'imageURL': result.imageURL,
    'steps': result.steps,
    'videoURL': result.videoURL,
    'link': link
  });

})


app.get('/signup', function (req, res) {
  res.render('signup')
})


app.get('/home', function (req, res) {
  res.render('homepage_A')
})
app.get('/home_B', function (req, res) {
  res.render('homepage_B')
})

app.get('/browse', function (req,res) {
  res.render('browse', {
    'results': browse.results
  })
})


app.listen(port, function () {
  console.log('App is running on port 3000')
})
