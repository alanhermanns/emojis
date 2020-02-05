export const getRates = baseCurrency => {
  return fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
    .then(res => res.json())
    .then(({ rates }) => rates);
};
