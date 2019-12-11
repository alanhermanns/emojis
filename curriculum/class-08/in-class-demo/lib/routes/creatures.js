const { Router } = require('express');
const Creature = require('../models/Creature');

module.exports = Router()
  .post('/', (req, res) => {
    Creature
      .create(req.body)
      .then(creature => res.send(creature));
  })

  .get('/:id', (req, res) => {
    Creature
      .findById(req.params.id)
      .populate('creatureType')
      .then(creature => res.send(creature));
  });
