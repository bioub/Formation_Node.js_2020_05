const expect = require('chai').expect;

// Pure function
// - prédictive
// - ne modifie pas ses paramètres
// - elle n'a de side-effect (appel externe)
function hello(name) {
  return `Hello ${name}`;
}

function bonjour(name) {
  if (!name) {
    throw new Error('name is mandatory');
  }
  console.log('Hello ' + name);
}

describe('hello function', () => {
  it('should return Hello Romain', () => {
    expect(hello('Romain')).to.equal('Hello Romain');
  });
});

describe('bonjour function', () => {
  it('should not throw Error', () => {
    bonjour('Romain')
  });
});
