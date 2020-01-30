import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';

const Habits = ({ habits }) => {
  const habitElements = habits.map((habit, i) => (
    <li key={i}>
      <Habit habit={habit} />
    </li>
  ));

  return (
    <ul>
      {habitElements}
    </ul>
  );
};

Habits.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    frequency: PropTypes.number.isRequired
  })).isRequired
};

export default Habits;
