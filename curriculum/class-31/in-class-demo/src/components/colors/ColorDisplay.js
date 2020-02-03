import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ color }) => (
  <div style={{ backgroundColor: color, width: '50vw', height: '50vh' }}>
    {color}
  </div>
);

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
