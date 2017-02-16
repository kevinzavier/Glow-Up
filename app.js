var express = require('express');
var app = express();
var fs = require('fs');
var handlebars = require('express3-handlebars')

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home')
});

app.get('/profile', function (req, res) {
  res.render('profile')
})

app.get('/time', function (req, res) {
  res.render('time')
})

app.get('/style', function (req, res) {
  res.render('style')
})

app.get('/occasion', function (req, res) {
  res.render('occasion')
})

app.get('/glowup', function (req, res) {
  res.render('glowup')
})

app.get('/signup', function (req, res) {
  res.render('signup')
})


app.get('/login', function (req, res) {
  res.render('login')
})

app.listen(port, function () {
  console.log('App is running on port 3000')
})
