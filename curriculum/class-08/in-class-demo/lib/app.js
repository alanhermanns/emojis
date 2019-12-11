const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/creatureTypes', require('./routes/creatureTypes'));
app.use('/api/v1/creatures', require('./routes/creatures'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
