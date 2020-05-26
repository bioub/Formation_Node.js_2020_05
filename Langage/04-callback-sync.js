const prenoms = ["Romain", "Jean", "Eric"];

// Style de programme -> paradigme impératif
for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  if (prenom.length === 4) {
    const prenom4Lettres = prenom;
    const prenom4LettresUpper = prenom4Lettres.toUpperCase();
    console.log(prenom4LettresUpper);
  }
}

// ES5 (2009) (IE9+) -> paradigme functionnel
prenoms
  .filter((prenom) => prenom.length === 4)
  .map((prenom4Lettres) => prenom4Lettres.toUpperCase())
  .forEach((prenom4LettresUpper) => {
    console.log(prenom4LettresUpper);
  });

console.log("Fin");


// pile d'appel
// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - log
// |(anonymous)
// +-------------------------------------------> temps
//                           JEAN ERIC Fin
