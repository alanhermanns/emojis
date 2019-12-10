const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/paper', require('./routes/paper'));

module.exports = app;
