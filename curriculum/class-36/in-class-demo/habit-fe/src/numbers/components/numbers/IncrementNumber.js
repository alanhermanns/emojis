import React from 'react';
import { useNumberIncrement } from '../../hooks/number';

const IncrementNumber = () => {
  const increment = useNumberIncrement();
  return <button onClick={increment}>^</button>;
};

export default IncrementNumber;
