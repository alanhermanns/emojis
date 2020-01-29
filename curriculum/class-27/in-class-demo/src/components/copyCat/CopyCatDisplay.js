import React from 'react';
import PropTypes from 'prop-types';

const CopyCatDisplay = ({ displayText }) => (
  <h1>{displayText}</h1>
);

CopyCatDisplay.propTypes = {
  displayText: PropTypes.string.isRequired
};

export default CopyCatDisplay;
