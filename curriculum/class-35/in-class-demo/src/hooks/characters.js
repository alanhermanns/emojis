import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCharacters } from '../services/rickAndMorty';

const suspenseWrapper = promiseFn => () => {
  let status = 'pending';
  let results = null;

  const suspender = promiseFn()
    .then(promiseResults => {
      status = 'resolved';
      results = promiseResults;
    })
    .catch(err => {
      status = 'rejected';
      results = err;
    });

  const read = () => {
    if(status === 'pending') throw suspender;
    if(status === 'resolved') return results;
    if(status === 'rejected') throw results;
  };

  return { read };
};

const characterSuspender = suspenseWrapper(getCharacters)();

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  return (
    <CharacterContext.Provider value={characterSuspender.read()}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  return useContext(CharacterContext);
};
