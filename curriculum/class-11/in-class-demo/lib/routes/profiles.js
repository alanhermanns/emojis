const { Router } = require('express');
const fetchQuote = require('../middleware/fetch-quote');
const Profile = require('../models/Profile');

module.exports = Router()
  .post('/', fetchQuote, (req, res, next) => {
    const tagline = req.quote;
    Profile
      .create({
        ...req.body,
        tagline
      })
      .then(profile => res.send(profile))
      .catch(next);
  })

  .patch('/:id/refresh', (req, res, next) => {
    Profile
      .findById(req.params.id)
      .then(profile => profile.refreshTagline())
      .then(profile => res.send(profile))
      .catch(next);

    Profile
      .refreshTagline(req.params.id)
      .then(profile => res.send(profile))
      .catch(next);
  });
