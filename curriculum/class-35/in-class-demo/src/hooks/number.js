import React, { createContext, useState, useContext } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(1);
  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => {
  return useContext(NumberContext).number;
};

export const useSetNumber = () => {
  return useContext(NumberContext).setNumber;
};
