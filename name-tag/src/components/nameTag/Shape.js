import React from 'react';
import PropTypes from 'prop-types';

const Shape = ({ text, color, backgroundColor }) => (
  <div style={{ color, backgroundColor, width: '20vw', height: '20vh' }}>
    {text}
  </div>
);

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Shape;
