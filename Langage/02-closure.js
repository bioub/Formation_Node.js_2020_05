// function() {
const porteeModule = 'porteeModule';

function externe() {
  const porteeClosure = 'porteeClosure';

  function interne() {
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeClosure);
    console.log(porteeModule);
  }

  interne();
}

externe();
// interne -> undefined

// pile d'appel
// ^
// |
// |interne
// |externe
// |(anonymous)
// +--------------------> temps

// }
