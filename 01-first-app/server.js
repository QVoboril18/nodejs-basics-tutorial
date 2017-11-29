var http = require('http'); //importing a module (like getting a function)

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

http.createServer(onRequest/* when server is made, in this case on rquest at port 8000*/).listen(8000); //sets the server location
