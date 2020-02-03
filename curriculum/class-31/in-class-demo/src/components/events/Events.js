import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const Events = ({ events }) => {
  const eventElements = events.map(({ text, year }) => (
    <li key={text}>
      <Event text={text} year={year} />
    </li>
  ));

  return (
    <ul>
      {eventElements}
    </ul>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default Events;
