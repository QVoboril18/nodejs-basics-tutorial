var http = require('http');
var app = require('./app');
 // inside code below calls function in 
http.createServer(app.handleRequest).listen(8000);
