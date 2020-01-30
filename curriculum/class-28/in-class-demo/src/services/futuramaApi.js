export const getQuotes = () => fetch('http://futuramaapi.herokuapp.com/api/quotes/10')
  .then(res => res.json())
  .then(quotes => quotes.map(({ quote, character, image }) => ({
    text: quote,
    name: character,
    image
  })));
