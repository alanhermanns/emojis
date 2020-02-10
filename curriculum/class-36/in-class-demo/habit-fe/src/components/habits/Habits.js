import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';

const Habits = ({ habits }) => {
  const habitElements = habits.map(habit => (
    <li key={habit.id}>
      <Habit {...habit} />
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
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    goal: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired
  })).isRequired
};

export default Habits;
