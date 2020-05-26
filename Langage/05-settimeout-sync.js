// function setTimeout(cb, delayMs) {
//   // Mauvaise pratique (perf)
//   // block le thread pendant delayMs
//   const debut = Date.now();
//   while (debut + delayMs > Date.now()) ;
//   cb();
// }

// setTimeout(() => {
//   console.log('1s');
// }, 1000);
// console.log('Fin');

function sleep(delayMs) {
  // Mauvaise pratique (perf)
  // block le thread pendant delayMs
  const debut = Date.now();
  while (debut + delayMs > Date.now()) ;
}

sleep(1000);
console.log('1s');
console.log('Fin');
