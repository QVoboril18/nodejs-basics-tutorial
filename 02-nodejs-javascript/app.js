var http = require('http'); //modules exports functions and variables out to this file.
var module1 = require('./module1'); // imports module1 contained in file path ./ (in my own dir)
var module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000); // example of a module function being used (http.)


//anonymous functions are when functions aren't outsourced
// Ex: if you replace onRequest(line 12) with all of the code in the onRequest function, that would become an anonymous function
