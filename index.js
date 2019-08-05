var http = require("http");

http.createServer(function (req, res) {
  
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body 
   res.end('Hello from Docker\n');
}).listen(9090);

console.log('Server running on port 9090/');