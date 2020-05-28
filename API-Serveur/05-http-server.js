const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Server', 'Romain\'s Node Server');
    res.setHeader('Content-Type', 'application/json');
    res.end('{"message": "Hello"}');
  } else {
    res.statusCode = 404;
    res.setHeader('Server', 'Romain\'s Node Server');
    res.setHeader('Content-Type', 'application/json');
    res.end('{"message": "Not found"}');
  }
});

// server.on('request', (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
