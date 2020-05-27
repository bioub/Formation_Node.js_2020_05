// function(exports, require, module, __dirname, __filename) {
'use strict';

// export via une variable (mauvaise pratique)
// globalThis.add = function (a, b) {
//   return a + b;
// };

function add(a, b) {
  return a + b;
};

function multiply(a, b) {
  return a * b;
}

// exports.add = add;
// exports.multiply = multiply;

module.exports = {
  add,
  multiply,
};

// }
