import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

// { text: 'hheontuh', name: 'name', image: 'http://...' }
// text={quote.text} name={quote.name} image={quote.image}

const Quotes = ({ quotes }) => {
  const quoteElements = quotes.map(quote => (
    <li key={quote.text}>
      <Quote {...quote} />
    </li>
  ));

  return (
    <ul>
      {quoteElements}
    </ul>
  );
};

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Quotes;
