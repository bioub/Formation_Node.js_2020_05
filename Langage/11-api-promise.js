const util = require('util');

// fs.readFile respecte le standard de callback de Node
// - callback dernier param
// - arguments du callback err, valeur de retour (si besoin)
const readFilePromise = util.promisify(fs.readFile);

// setTimeout((val) => {
//   console.log(val);
// }, 1000, 'A');

function timeout(delayMs, val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, delayMs);
  });
}

// timeout(500, 'A').then((val) => console.log(val));
// timeout(0, 'B').then((val) => console.log(val));
// timeout(500, 'C').then((val) => console.log(val));
// timeout(1000, 'D').then((val) => console.log(val));

// console.log('E');

async function randomTimeout(val) {
  const delayMs = Math.floor(Math.random() * 1001);
  return await timeout(delayMs, val);
}

// randomTimeout('A').then((val) => console.log(val));
// randomTimeout('B').then((val) => console.log(val));
// randomTimeout('C').then((val) => console.log(val));
// randomTimeout('D').then((val) => console.log(val));

// console.log('E');

// Promise.all([
//   randomTimeout('A'),
//   randomTimeout('B'),
//   randomTimeout('C'),
//   randomTimeout('D'),
// ]).then((values) => {
//   console.log(values);
// })

// Sans Promise.all
// randomTimeout('A').then((val) => {
//   console.log(val);
//   return randomTimeout('B');
// })
(async () => {
  const val1 = await randomTimeout("A");
  console.log("serie", val1);
  const val2 = await randomTimeout("B");
  console.log("serie", val2);
  const val3 = await randomTimeout("C");
  console.log("serie", val3);
  const val4 = await randomTimeout("D");
  console.log("serie", val4);
})();

(async () => {
  const values = await Promise.all([
    randomTimeout("A"),
    randomTimeout("B"),
    randomTimeout("C"),
    randomTimeout("D"),
  ]);

  for (const val of values) {
    console.log("parallel", val);
  }
})();




// Promise.race([
//   axios.get('/contacts'),
//   timeout(5000),
// ]).then(() => {

// })
