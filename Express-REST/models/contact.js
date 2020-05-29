const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire'],
  },
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate(val) {
      return val.includes('@');
    }
  },
});

schema.statics.findByIdAndReplace = function(id, data) {
  return this.findOneAndReplace({ _id: id }, data);
};

const Contact = mongoose.model('Contact', schema);
module.exports = Contact;
