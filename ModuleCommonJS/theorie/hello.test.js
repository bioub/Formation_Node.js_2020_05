// const { hello } = require('./hello');

// console.log(hello('Romain'));

const assert = require('assert');
const chalk = require('chalk');
const hello = require('./hello');

try {
  assert.equal(hello('Romain'), 'Hello Romain !');
  console.log(chalk.green('Tests Hello Succeeded'));
} catch (err) {
  console.log(chalk.red('Tests Hello Failed'));
  process.exit(1);
}
