import React from 'react';
import PropTypes from 'prop-types';

const RadioOption = ({ children, name, value, isChecked, onChange }) => (
  <>
    <input type="radio" id={value} name={name} value={value} checked={isChecked} onChange={onChange} />
    <label htmlFor={value}>{children}</label>
  </>
);

RadioOption.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

export default RadioOption;
