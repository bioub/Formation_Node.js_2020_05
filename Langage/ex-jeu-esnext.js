// function() {
"use strict";

const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require("readline");

class Jeu {
  essais = [];

  #rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  /**
   * @constructor
   * @param {object} options
   * @param {number} options.min La borne min
   * @param {number} options.max La borne max
   */
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;
    this.entierAlea = Random.getIntInclusive(min, max);
    // Object.assign(this, { min: 0, max: 100}, options);
    // this.entierAlea = Random.getIntInclusive(this.min, this.max)
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà saisi : ${this.essais.join(" - ")}...`);
    }

    this.#rl.question("Quel est le nombre ? ", (answer) => {
      console.log(`Vous avez saisi : ${answer} !`);

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
        this.#rl.close();
      }
    });
  }
}

const game = new Jeu();
game.jouer();

// }
