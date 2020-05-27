// function(exports, require, module, __dirname, __filename) {

const assert = require('assert'); // binaire Node
const chalk = require('chalk'); // dossier du node_modules
const MyMath = require('./my-math'); // fichier local

try {
  assert.equal(MyMath.add(1, 2), 3);
  console.log(chalk.green('Tests MyMath Succeeded'));
} catch (err) {
  console.log(chalk.red('Tests MyMath Failed'));
  process.exit(1);
}

// }
