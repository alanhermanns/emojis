import React from 'react';
import { useNumber } from '../../hooks/number';

const NumberDisplay = () => {
  const number = useNumber();
  return <p>{number}</p>;
};

export default NumberDisplay;
