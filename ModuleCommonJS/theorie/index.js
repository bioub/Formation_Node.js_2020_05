const fs = require('fs');
const config = require('./config');

fs.readdirSync(__dirname)
  .filter((filename) => filename.endsWith(config.suffix))
  .forEach((filename) => require(__dirname + '/' + filename));
