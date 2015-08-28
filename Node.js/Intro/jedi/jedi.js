var express = require('express');

var app = express();

var x;
var y;

app.get('/jedi/:firstname/:lastname', function(request, response) {
  var first = request.params.firstname;
  var last = request.params.lastname;
  var jediName = last.slice(0, 3) + first.slice(0, 2); 
  response.send(["Hello", jediName].join(" "))
});

app.get('/', function(request, response) {
  response.send("Hello World");
});

app.listen(8080);
