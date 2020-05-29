class Contact {
  prenom = 'Romain'; // ESNext
  hello() {
    console.log(`Hello ${this.prenom}`);
  }
  // ES3
  // helloCallback() {
  //   var that = this;
  //   setTimeout(function() {
  //     console.log(`Hello ${that.prenom}`);
  //   }, 1000);
  // }
  // ES5
  // helloCallback() {
  //   setTimeout(function() {
  //     console.log(`Hello ${this.prenom}`);
  //   }.bind(this), 1000);
  // }
  // ES6
  helloCallback() {
    // this de la portée closure
    setTimeout(() => {
      // toutes les pseudo variables ne sont pas créées
      // dans fonctions fléchées :
      // this, arguments, super, new.target
      console.log(`Hello ${this.prenom}`);
    }, 1000);
  }
}

const romain = new Contact();
romain.helloCallback();

// Function.prototype.bind = function(that) {
//   const fct = this;
//   return function() {
//     fct.call(that);
//   };
// }
