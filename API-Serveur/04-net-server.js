const net = require('net');

const server = net.createServer((socket) => {
  console.log('connection');
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Server: Romain\'s Node Server\r\n');
  socket.write('Content-type: application/json\r\n');
  socket.write('\r\n');
  socket.end('{"message": "Hello"}\r\n');
});

server.on('close', () => {
  console.log('close');
});

// server.on('connection', (socket) => {
//   console.log('connection');
//   socket.pipe(process.stdout);
//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Server: Romain\'s Node Server\r\n');
//   socket.write('Content-type: application/json\r\n');
//   socket.write('\r\n');
//   socket.end('{"message": "Hello"}\r\n');
// });

server.on('error', (err) => {
  console.log('error', err);
});

// server.on('listening', () => {
//   console.log('listening');
// });

server.listen(3000, () => {
  console.log('listening');
});
