const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// middleware (plugin) global
// app.use('/api', express.json());

// GET POST PUT OPTIONS DELETE PATCH

// tout ce qui commence par /css (quelque soit la METHOD)
app.use('/css', (req, res) => {
  res.json({message: "CSS"});
});

// tout les URLs / (quelque soit la METHOD)
app.all('/', (req, res) => {
  res.json({message: "Bonjour 1"});
});

// pas accessible à cause de la route précédente
app.get('/', (req, res) => {
  res.json({message: "Bonjour 2"});
});

app.get('/hello/:prenom', (req, res) => {
  res.json({message: "Bonjour " + req.params.prenom});
});

app.post('/contact-email', express.json(), (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.json({message: 'Done'});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
