import { useState, useEffect } from 'react';
import { getLocations, getForecast } from '../services/weatherApi';

export const useLocations = searchTerm => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // only fetch if searchTerm is not an empty string
    // fetch locations based on searchTerm
    if(!searchTerm) return;

    getLocations(searchTerm)
      .then(setLocations);
    // .then(newLocations => setLocations(newLocations));
  }, [searchTerm]);

  return locations;
};

export const useForecast = woeid => {
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getForecast(woeid)
      .then(forecast => setForecast(forecast))
      .finally(() => setLoading(false));
  }, [woeid]);

  return { forecast, loading };
};
