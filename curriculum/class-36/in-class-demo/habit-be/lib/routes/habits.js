const { Router } = require('express');
const Habit = require('../models/Habit');

module.exports = Router()
  .post('/', (req, res, next) => {
    Habit
      .create(req.body)
      .then(habit => res.send(habit))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    const page = Number(req.query.page) - 1;
    Habit
      .find()
      .select({ description: false })
      .limit(25)
      .skip(page * 25)
      .then(habits => res.send(habits))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Habit
      .findById(id)
      .then(habit => res.send(habit))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const { id } = req.params;

    Habit
      .findByIdAndUpdate(id, { $inc: { current: 1 } }, { new: true })
      .then(habit => res.send(habit))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;

    Habit
      .findByIdAndDelete(id)
      .then(habit => res.send(habit))
      .catch(next);
  });
