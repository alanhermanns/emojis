import React from 'react';
import PropTypes from 'prop-types';
import { useForecast } from '../../hooks/locations';

const Forecast = ({ woeid }) => {
  const forecast = useForecast(woeid);

  return (
    <section>
      <h2>{forecast.title}</h2>
      <img src={forecast.icon} style={{ width: '10vw' }} />
      <p>Temperature: {forecast.the_temp}</p>
      <p>Humidity: {forecast.humidity}</p>
    </section>
  );
};

Forecast.propTypes = {
  woeid: PropTypes.number.isRequired
};

export default Forecast;
