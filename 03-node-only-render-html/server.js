var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}); // this will render html into proper text. If text/plain, it would be the raw html code
    fs.readFile('./index.html', null, function(error, data) { // read file method takes 3 args(path, options, and a call back(function to be read once file went in )
        if (error) { // checking out of function and if error, do below
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data); // writes data from callback function
        }
        response.end(); // ends the response, contained inside to not cause nay problems
    });
}

http.createServer(onRequest).listen(8000);
