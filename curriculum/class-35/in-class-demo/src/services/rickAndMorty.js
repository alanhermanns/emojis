const request = url => {
  return fetch(url)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getCharacters = () => {
  return request('https://rickandmortyapi.com/api/character/')
    .then(({ results }) => results);
};
