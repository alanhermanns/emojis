export const getQuotes = () => fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/10')
  .then(res => res.json())
  .then(quotes => quotes.map(text => ({
    text,
    name: 'Ron Swanson',
    image: 'https://www.boredteachers.com/wp-content/uploads/2018/02/Ron_Swanson_Teacher_Life_cover_Bored_Teachers.jpeg'
  })));
