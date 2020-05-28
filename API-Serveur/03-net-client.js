const net = require('net');

const socket = net.createConnection(80, 'example.com');

socket.pipe(process.stdout);

socket.on('connect', () => {
  console.log('server has accepted this connection');
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.com\r\n');
  socket.write('User-agent: My Net Client\r\n');
  socket.end('\r\n');
});
