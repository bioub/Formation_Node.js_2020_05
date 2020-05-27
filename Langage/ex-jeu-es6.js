// function() {
  'use strict';

const Random = {
  // Ex: Method properties
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require("readline");

/**
 * @constructor
 * @param {object} options
 * @param {number} options.min La borne min
 * @param {number} options.max La borne max
 */
// Ex: Class
function Jeu(options) {
  // Ex: Default params
  options = options || {};

  // Ex: Object destructuring + default param + shortand property
  // voir slide 146
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this.entierAlea = Random.getIntInclusive(min, max);
  this.essais = [];
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    // Ex: Template literal
    console.log("Vous avez déjà saisi : " + this.essais.join(" - ") + "...");
  }

  this._rl.question("Quel est le nombre ? ", (answer) => {
    // Ex: Template literal
    console.log("Vous avez saisi : " + answer + "!");

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log("Erreur : il faut saisir un entier");
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log("Trop petit");
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log("Trop grand");
      this.jouer();
    } else {
      console.log("Gagné !!!");
      this._rl.close();
    }
  });
};


const game = new Jeu({
  min: 10,
  max: 20,
});
game.jouer();


// }
