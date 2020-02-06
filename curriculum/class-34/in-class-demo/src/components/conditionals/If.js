import React from 'react';
import PropTypes from 'prop-types';

export const If = ({ children, condition }) => {
  if(!condition) return null;

  return children;
};

If.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool.isRequired
};

export const Unless = ({ children, condition }) => {
  if(condition) return null;

  return children;
};

Unless.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool.isRequired
};
