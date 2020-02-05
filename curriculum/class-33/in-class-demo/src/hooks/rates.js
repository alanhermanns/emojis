import { useState, useEffect } from 'react';
import { getRates } from '../services/ratesApi';

export const useRate = (baseCurrency, exchangeCurrency) => {
  const [firstMount, setFirstMount]  = useState(true);
  const [exchangeRates, setExchangeRates] = useState();
  const [rate, setRate] = useState();

  useEffect(() => {
    getRates(baseCurrency)
      .then(rates => {
        setExchangeRates(rates);
        setRate(rates[exchangeCurrency]);
        setFirstMount(false);
      });
  }, [baseCurrency]);

  useEffect(() => {
    if(!firstMount) setRate(exchangeRates[exchangeCurrency]);
  }, [exchangeCurrency]);

  return rate;
};

// import { useState, useEffect } from 'react';
// import { useRequest } from './requests';

// export const useRate = (baseCurrency, exchangeCurrency) => {
//   const [rate, setRate] = useState();
//   const { response } = useRequest(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`);

//   useEffect(() => {
//     setRate(response.rates[exchangeCurrency]);
//   }, [response, exchangeCurrency]);

//   return rate;
// };
