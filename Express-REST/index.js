const http = require('http');
const mongoose = require('mongoose');

// dot-env
const config = require('./config');
const app  = require('./app');

mongoose.connect('mongodb://localhost:27017/addressbook', {useNewUrlParser: true, useUnifiedTopology: true});

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
