import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import { useLocations } from '../../hooks/locations';
import { Link } from 'react-router-dom';

const Locations = ({ searchTerm }) => {
  const locations = useLocations(searchTerm);

  const locationElements = locations.map(location => (
    <li key={location.woeid}>
      <Link to={`/location/${location.woeid}`}>
        <Location {...location} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {locationElements}
    </ul>
  );
};

Locations.propTypes = {
  searchTerm: PropTypes.string.isRequired
};

export default Locations;
