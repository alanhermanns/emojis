import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, color }) => (
  <button style={{ backgroundColor: color }} onClick={onClick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Button;
