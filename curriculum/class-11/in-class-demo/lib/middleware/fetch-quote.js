const { getQuote: getSimpsonsQuote } = require('../services/simpsons');
const { getQuote: getFuturamaQuote } = require('../services/futurama');

module.exports = (req, res, next) => {
  const { tvShow } = req.body;
  if(tvShow === 'simpsons') {
    getSimpsonsQuote()
      .then(quote => {
        req.quote = quote;
        next();
      });
  } else if(tvShow === 'futurama') {
    getFuturamaQuote()
      .then(quote => {
        req.quote = quote;
        next();
      });
  } else {
    const err = new Error('Invalid tvShow');
    err.status = 400;
    next(err);
  }
};
