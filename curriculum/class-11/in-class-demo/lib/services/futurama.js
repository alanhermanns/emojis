const superagent = require('superagent');

const getQuote = () => {
  return superagent
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => {
      const [{ quote }] = res.body;

      return quote;
    });
};

module.exports = {
  getQuote
};
