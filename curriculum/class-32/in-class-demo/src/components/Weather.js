import React, { useState } from 'react';
import LocationSearch from './locations/LocationSearch';
import Forecast from './forecasts/Forecast';

const Weather = () => {
  const [woeid, setWoeid] = useState(2475687);

  return (
    <>
      <LocationSearch selectLocation={setWoeid} />
      <Forecast woeid={woeid} />
    </>
  );
};

export default Weather;
