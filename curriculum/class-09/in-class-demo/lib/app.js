const express = require('express');
const app = express();

// app.use(express.json());
// app.use((req, res, next) => {
//   let body = '';
//   req.on('data', chunk => {
//     body += chunk;
//   });

//   req.on('end', () => {
//     const bodyJson = JSON.parse(body.toString());
//     req.body = bodyJson;
//     next();
//   });
// });

app.use((req, res, next) => {
  console.log('I am inside middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('second middleware');
  next();
});

const needsAuth = (req, res, next) => {
  const { password } = req.query;
  if(password === 'reallyGoodPassword') {
    next();
  } else {
    next('Invalid password');
  }
};

app.get('/', needsAuth, (req, res, next) => {
  res.end('We made it');
});

// app.use('/api/v1/creatureTypes', require('./routes/creatureTypes'));
// app.use('/api/v1/creatures', require('./routes/creatures'));

// app.use(require('./middleware/not-found'));
// app.use(require('./middleware/error'));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(503).send({
    message: err
  });
});

module.exports = app;
