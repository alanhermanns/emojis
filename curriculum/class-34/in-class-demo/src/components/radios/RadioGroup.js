import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ children, name, checked, onChange }) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      isChecked: checked === child.props.value,
      onChange
    });
  });
};

RadioGroup.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioGroup;
