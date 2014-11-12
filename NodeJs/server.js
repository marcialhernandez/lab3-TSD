var http = require('http');
   http.createServer(function (request, response) {
     response.writeHead(200, {'Content-Type': 'text/html'});
     response.end('Woohoo!');
   }).listen(3000, function(){
  console.log('listening on *:3000');
});

/*var connect = require("connect");
connect(connect.static(__dirname + "/public")).listen(3000, function(){
  console.log('listening on *:3000');
});*/