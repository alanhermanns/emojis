import React from 'react';
import { useSetNumber } from '../../hooks/number';

export default function UpdateNumber() {
  const setNumber = useSetNumber();

  return (
    <button onClick={() => setNumber(num => num + 1)}>Inc</button>
  );
}
