export const getEvents = (month, day) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://history.muffinlabs.com/date/${month}/${day}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(({ data }) => data.Events.map(({ year, text }) => ({ year, text })));
};
