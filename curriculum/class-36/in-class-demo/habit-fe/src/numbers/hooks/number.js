import React, { createContext, useState, useContext } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(5);

  const increment = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  return (
    <NumberContext.Provider value={{ number, increment }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => {
  return useContext(NumberContext).number;
};

export const useNumberIncrement = () => {
  return useContext(NumberContext).increment;
};

// export const useNumber = (initialNumber = 5) => {
//   const [number, setNumber] = useState(initialNumber);

//   const increment = () => {
//     setNumber(prevNumber => prevNumber + 1);
//   };

//   return { number, increment };
// };
