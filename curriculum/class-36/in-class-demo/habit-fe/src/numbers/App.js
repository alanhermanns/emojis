import React from 'react';
import NumberChanger from './containers/NumberChanger';
import { NumberProvider } from './hooks/number';
import NumberDisplay from './numbers/NumberDisplay';
import IncrementNumber from './numbers/IncrementNumber';

export default function App() {
  return (
    <NumberProvider>
      <NumberDisplay />
      <IncrementNumber />
    </NumberProvider>
  );
}
