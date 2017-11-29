var url = require('url'); // gets helper url functions
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname; // ex of url function, gets pathname that user enters
      switch (path) {
          case '/': // base case should go to root or index
              renderHTML('./index.html', response);
              break;
          case '/login': // case should go to login
              renderHTML('./login.html', response);
              break;
          default: // deafult is a 404, or path undefined
              response.writeHead(404);
              response.write('Route not defined');
              response.end();
      }

  }
};
