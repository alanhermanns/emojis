import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Locations from './Locations';

const LocationSearch = ({ selectLocation }) => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={({ target }) => setQuery(target.value)} />
        <button>Search</button>
      </form>
      <Locations searchTerm={searchTerm} selectLocation={selectLocation} />
    </>
  );
};

export default LocationSearch;
