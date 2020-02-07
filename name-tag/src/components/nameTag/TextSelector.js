import React from 'react';
import PropTypes from 'prop-types';

const TextSelector = ({ text, onChange }) => (
  <>
    <input type="text" name="text" value={text} onChange={onChange} />
  </>
);

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextSelector;
