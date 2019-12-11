const { Router } = require('express');
const CreatureType = require('../models/CreatureType');
const Creature = require('../models/Creature');

module.exports = Router()
  .post('/', (req, res) => {
    CreatureType
      .create(req.body)
      .then(creatureType => res.send(creatureType));
  })

  .get('/:id', (req, res) => {
    Promise.all([
      CreatureType.findById(req.params.id),
      Creature.find({ creatureType: req.params.id })
    ])
      .then(([creatureType, creatures]) => {
        res.send({ ...creatureType.toJSON(), creatures });
      });
  });
