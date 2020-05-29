const app = require('../app');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Contact = require('../models/contact');

const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('functionnals tests', () => {
  beforeEach(() => {
    // ex insérer un nouveau de données dans la base
  })
  it('GET /api/contacts', async () => {
    const mock = sinon.mock(Contact);

    mock.expects('find')
      .resolves([{prenom: 'Romain', id: 123}])
      .calledOnceWith();

    const res = await chai.request(app)
      .get('/api/contacts');

    expect(res.status).to.equals(200);
    expect(res.body).to.deep.equals([{prenom: 'Romain', id: 123}]);

    mock.verify(); // vérifier .calledOnceWith();
  });
});
