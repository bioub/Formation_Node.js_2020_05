const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loop() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    loop();
  });
}

loop();
console.log('Fin');

// pile d'appel
// ^
// |
// |ques                             ques                 ques
// |loop - log                  lg - loop            lg - loop
// |(anonymous)                 =>                   =>
// +----------------------------ENTREE---------------ENTREE-----------> temps
//  Quel?  Fin                  Vous Quel?

