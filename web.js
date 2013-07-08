var fs = require('fs');
var array = fs.readFileSync('index.html').toString().split("\n");
var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(array[0]);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});