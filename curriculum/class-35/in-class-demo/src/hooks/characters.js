import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMorty';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .catch(setError)
      .finally(setLoading.bind(null, false));
  }, []);

  return { characters, loading, error };
};
