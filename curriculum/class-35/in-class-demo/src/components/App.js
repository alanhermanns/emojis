import React, { Suspense } from 'react';
import Characters from './characters/Characters';
import { CharacterProvider } from '../hooks/characters';
import { NumberProvider } from '../hooks/number';
import Number from './numbers/Number';
import UpdateNumber from './numbers/UpdateNumber';


// throw promise -> Loading (fallback)
// throw other than promise -> error
// return -> display
export default function App() {
  return (
    <>
      <NumberProvider>
        <UpdateNumber />
        <Number />
      </NumberProvider>
      <Suspense fallback={<h1>Loading because of Suspense</h1>}>
        <CharacterProvider>
          <Characters />
        </CharacterProvider>
      </Suspense>
    </>
  );
}
