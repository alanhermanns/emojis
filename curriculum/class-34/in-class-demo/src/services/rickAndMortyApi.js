export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(({ results }) => results);
};

export const getCharacter = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};
