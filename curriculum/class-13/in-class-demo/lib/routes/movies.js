const { Router } = require('express');
const Movie = require('../models/Movie');

module.exports = Router()
  .post('/', (req, res, next) => {
    Movie
      .create(req.body)
      .then(movie => res.send(movie))
      .catch(next);
  })

  .get('/top', (req, res, next) => {
    const { count = 10, order = 'desc' } = req.query;
    Movie
      .getRevenueBudgetRatio(Number(count), order)
      .then(topMovies => res.send(topMovies))
      .catch(next);
  })

  .get('/popular-genres', (req, res, next) => {
    Movie
      .getGenreCount()
      .then(genres => res.send(genres))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Movie
      .findById(req.params.id)
      .then(movie => res.send(movie))
      .catch(next);
  })

  // ?page=1&perPage=25
  .get('/', (req, res, next) => {
    const { page = 1, perPage = 25 } = req.query;
    Movie
      .find()
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage))
      .then(movies => res.send(movies))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Movie
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(movie => res.send(movie))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Movie
      .findByIdAndDelete(req.params.id)
      .then(movie => res.send(movie))
      .catch(next);
  });
