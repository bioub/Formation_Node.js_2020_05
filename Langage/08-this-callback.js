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
      console.log(`Hello ${this.prenom}`);
    }, 1000);
  }
}

const romain = new Contact();
romain.helloCallback();

