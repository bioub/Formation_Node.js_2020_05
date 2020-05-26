function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // removeHistoryDuplicates: false
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà saisi : ' + essais.join(' - '))
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné !!!');
      rl.close();
    }
  });
}

// const entierAlea = getRandomIntInclusive(0, 100);
// const essais = [];
// jouer();
// console.log('Fin');

const game = new Jeu(); // <- constructor (3 propriétés entierAlea, essais, _rl)
game.jouer();


// pile d'appel
// ^
// |
// |ques                             ques                 ques
// |loop - log                  lg - loop            lg - loop
// |(anonymous)                 =>                   =>
// +----------------------------ENTREE---------------ENTREE-----------> temps
//  Quel?  Fin                  Vous Quel?

