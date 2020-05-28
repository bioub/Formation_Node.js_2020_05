'use strict';

function hello(p1, p2) {
  console.log(`Hello ${p1}, ${p2} my name is ${this.prenom}`);
}

const contact = {
  prenom: 'Romain',
  hello() {

  }
}

hello.call(contact, 'Jean', 'Eric');
hello.apply(contact, ['Jean', 'Eric']);

// ES5
const helloContact = hello.bind(contact);
helloContact('Jean', 'Eric');
