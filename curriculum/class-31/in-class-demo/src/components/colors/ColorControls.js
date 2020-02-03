import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ color, setColor }) => (
  <input type="color" value={color} onChange={({ target }) => setColor(target.value)} />
);

ColorControls.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired
};

export default ColorControls;
