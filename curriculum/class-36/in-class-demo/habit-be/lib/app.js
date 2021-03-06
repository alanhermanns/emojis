const express = require('express');
const app = express();

app.use(require('cookie-parser')());
app.use(require('cors')({
  origin: true,
  credentials: true
}));
app.use(express.json());

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/habits', require('./routes/habits'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
