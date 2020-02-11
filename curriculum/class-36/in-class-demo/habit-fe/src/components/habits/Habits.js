import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';
import { Link } from 'react-router-dom';

const Habits = ({ habits }) => {
  const habitElements = habits.map(habit => (
    <li key={habit._id}>
      <Link to={`/habit/${habit._id}`}>
        <Habit {...habit} />
      </Link>
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
