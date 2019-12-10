const { Router } = require('express');
const Paper = require('../models/Paper');

module.exports = Router()
  .post('/', (req, res) => {
    Paper
      .create(req.body)
      .then(paper => res.send(paper));
  })

  .get('/:id', (req, res) => {
    Paper
      .findById(req.params.id)
      .then(paper => res.send(paper));
  })

  .get('/', (req, res) => {
    Paper
      .find()
      .then(papers => res.send(papers));
  })

  .patch('/:id', (req, res) => {
    Paper
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(paper => res.send(paper));
  })

  .delete('/:id', (req, res) => {
    Paper
      .findByIdAndDelete(req.params.id)
      .then(paper => res.send(paper));
  });
