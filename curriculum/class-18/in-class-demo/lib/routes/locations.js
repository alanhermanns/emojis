const { Router } = require('express');
const Location = require('../models/Location');

module.exports = Router()
  .post('/', (req, res, next) => {
    Location
      .create(req.body)
      .then(location => res.send(location))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Location
      .find()
      .then(locations => res.send(locations))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Location
      .findById(req.params.id)
      .then(location => res.send(location))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Location
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(location => res.send(location))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Location
      .findByIdAndRemove(req.params.id)
      .then(location => res.send(location))
      .catch(next);
  });
