function hello(name) {
  return `Hello ${name}`;
}

const prenoms = ['Romain', 'Jean'];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
