/**
 * Ma fonction hello
 * @param {string} name Le prénom
 * @returns {string} Message de salutations
 */
function hello(name) {
  return `Hello ${name}`;
}

/** @type {string[]} */
const prenoms = [];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
