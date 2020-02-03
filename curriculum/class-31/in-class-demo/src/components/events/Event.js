import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ year, text }) => (
  <section>
    <h2>{year}</h2>
    <p>{text}</p>
  </section>
);

Event.propTypes = {
  year: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Event;
