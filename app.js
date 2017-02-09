var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
});

app.get('/profile/:id', function (req, res) {
  res.send('<html><head><link href=assets/styles.css type=text/css rel=stylesheet/></head><body><h1>'+ req.params.id + '</h1></body></html>')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
