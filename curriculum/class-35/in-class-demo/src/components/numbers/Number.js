import React from 'react';
import { useNumber } from '../../hooks/number';

export default function Number() {
  const number = useNumber();

  return <p>{number}</p>;
}
