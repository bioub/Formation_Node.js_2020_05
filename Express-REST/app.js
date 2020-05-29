const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');
const contactRoutes = require('./routes/contact');
const userRoutes = require('./routes/user');

const app = express();

// Log Middleware
if (config.env.development) {
  app.use(morgan('dev'));
} else {
  // app.use(morgan('common', {stream: fs.cre}));
}
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// CORS Middleware (cross-domain requests)
app.use(cors());

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
});

app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
});

module.exports = app;
