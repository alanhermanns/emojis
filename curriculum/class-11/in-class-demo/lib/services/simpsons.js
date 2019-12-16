const superagent = require('superagent');

const getQuote = () => {
  return superagent
    .get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      const [{ quote }] = res.body;

      return quote;
    });
};

module.exports = {
  getQuote
};
