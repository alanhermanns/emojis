require('dotenv').config();
require('./lib/utils/connect')();

const chance = require('chance').Chance();
const mongoose = require('mongoose');
const Habit = require('./lib/models/Habit');

Habit
  .create([...Array(1000)].map(() => ({
    title: chance.sentence({ words: 3 }),
    description: chance.paragraph(),
    goal: chance.integer({ min: 1, max: 10 })
  })))
  .then(() => console.log('done'))
  .catch(console.error)
  .finally(() => mongoose.connection.close());
