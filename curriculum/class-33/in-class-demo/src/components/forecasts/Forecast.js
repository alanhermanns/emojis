import React from 'react';
import PropTypes from 'prop-types';
import { useForecast } from '../../hooks/locations';
import styles from './Forecast.css';

const toFahrenheit = temp => temp * 9 / 5 + 32;

const Forecast = ({ match }) => {
  const { forecast, loading } = useForecast(match.params.woeid);
  if(loading) return <h1 className={styles.Loading}>Loading</h1>;

  return (
    <section>
      <h2>{forecast.title}</h2>
      <img src={forecast.icon} style={{ width: '10vw' }} />
      <p>Temperature: {toFahrenheit(forecast.the_temp)} F</p>
      <p>Humidity: {forecast.humidity}</p>
    </section>
  );
};

Forecast.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      woeid: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Forecast;
