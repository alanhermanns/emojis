export const getLocations = searchTerm => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchTerm}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(locations => locations.map(({ title, location_type: type, woeid }) => ({
      title,
      type,
      woeid
    })));
};

export const getForecast = woeid => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      ...json.consolidated_weather[0],
      title: json.title,
      icon: `https://www.metaweather.com/static/img/weather/${json.consolidated_weather[0].weather_state_abbr}.svg`
    }));
};
