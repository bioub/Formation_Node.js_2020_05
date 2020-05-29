const authenticate = require('../../middlewares/authenticate');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('middleware authenticate', () => {
  it('should call next when token is valid', () => {
    const req = {
      headers: {
        authorization: 'd4973653-9895-4123-a7dd-3e1387d0fbde',
      }
    };
    const res = {
      json() {}
    };
    const next = sinon.spy();
    authenticate(req, res, next);

    // sans sinon-chai
    // expect(next.callCount).to.equal(1);
    expect(next).to.have.been.calledOnceWith();
  });

  it('should call res.json token is valid', () => {
    // Vérifier si on passe un mauvais token
    // que res.statusCode soit égal à 401
    // et que res.json ai été appelé une seule fois avec un objet { msg: 'Unauthorized' }
    // en paramètre
  });
});
