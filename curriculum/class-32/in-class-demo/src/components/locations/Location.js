import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ title, type, woeid }) => (
  <section>
    <h2>{title}</h2>
  </section>
);

Location.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  woeid:  PropTypes.number.isRequired
};

export default Location;
