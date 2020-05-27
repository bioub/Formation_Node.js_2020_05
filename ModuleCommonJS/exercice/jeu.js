const readline = require("readline");

// importer la fonction getRandomIntInclusive ou l'objet Random

class Jeu {
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
    // this.entierAlea = Random.getIntInclusive(this.min, this.max);

    this.essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà saisi : ${this.essais.join(" - ")}...`);
    }

    this._rl.question("Quel est le nombre ? ", (answer) => {
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
        this._rl.close();
      }
    });
  }
}

// exporter Jeu
