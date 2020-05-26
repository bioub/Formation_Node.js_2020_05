console.log(Math.sum); // undefined

// Extension d'objet
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

delete Math.sum;
console.log(Math.sum); // undefined

// MAUVAISE PRATIQUE D'ETENDRE DES OBJETS
// QU'ON A PAS CREER (Langage, WebAPI, Node, lib)

// On peut créer un objet directement
const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x); // 1
console.log(coords.y); // 2

coords.z = 3;
console.log(coords.z); // 3
console["log"](coords["z"]); // 3

// Plus dynamique
const cle = "z";
console.log(coords[cle]); // 3

for (const key in coords) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}

// Eviter avec object literal {}
// de mettre des méthodes si les objets sont dupliqués

const contactA = {
  prenom: "Romain",
  hello: function () {
    return `Hello ${this.prenom}`;
  },
};

const contactB = {
  prenom: "Jean",
  hello: function () {
    return `Hello ${this.prenom}`;
  },
};

console.log(contactA.hello === contactB.hello); // reference (est le même objet ?)

// Pour des objets plus complexes et/ou des objets multi-instanciés avec méthodes
// constructor function
function Contact(prenom) {
  this._prenom = prenom;
}

Contact.class = 'Contact';

Contact.prototype.hello = function () {
  return `Hello ${this._prenom}`;
};

const contact1 = new Contact("Romain");
console.log(Contact.class);
console.log(contact1.hello());
console.log(contact1._prenom); // mauvaise pratique (_ === private)

console.log(process);
