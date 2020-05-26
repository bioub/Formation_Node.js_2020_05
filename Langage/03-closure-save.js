function delay(msg, delay = 1000) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}

delay('Hello', 1500);

function save(val) {
  return () => {
    console.log(val);
  }
}

for (var i = 0; i < 3; i++) {
  setTimeout(save(i), 1000);
}

// i === 3

// ..1s.. 0 ..1s.. 1 ..1s.. 2
// ..1s.. 0 1 2
// ..1s.. 3 3 3


// interne -> undefined

// pile d'appel
// ^
// |
// |
// |externe - interne
// |(anonymous)
// +--------------------> temps

// }
