// function interval(delayMs, val) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve(val);
//     }, delayMs);
//   });
// }

// const  { EventEmitter } = require("events");

// interval(1000, '1s')
//   .then((val) => console.log(val));

// function interval(delayMs, val) {
//   const events = new EventEmitter();

//   setInterval(() => {
//     events.emit(val, val);
//   }, delayMs);

//   return events;
// }

// Version basée sur events
// interval(1000, '1s')
//   .on('1s', (val) => console.log(val));

// Version basée sur async iterator (ES2018)
// for await (const val of interval(1000, '1s')) {
//   console.log(val);
// }

// Version Observable (Angular)
const { Observable } = require('rxjs');

function interval(delayMs, val) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(val);
    }, delayMs);
  });
}

interval(1000, '1s')
  .subscribe((val) => console.log(val));


// Version Stream
