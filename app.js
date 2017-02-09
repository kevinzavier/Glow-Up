var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
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

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
