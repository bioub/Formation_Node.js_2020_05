const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/addressbook", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Contact = require("../models/contact");

(async () => {
  const contacts = await Contact.find();

  for (const contact of contacts) {
    contact.email = "test@test.com";
    await contact.save();
  }

  await mongoose.disconnect();
})();
