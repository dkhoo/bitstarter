var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var fs = require("fs");
  response.send(fs.readFileSync('index.html').toString());

//  response.send('Hello World 2!');
});

//  serve static files
app.use("/static",express.static(__dirname+"/static"));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
