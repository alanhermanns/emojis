import React from 'react';
import PropTypes from 'prop-types';

const Habit = ({ title, goal, current }) => (
  <section>
    <h2>{title}</h2>
    <progress value={current} max={goal} />
  </section>
);

Habit.propTypes = {
  title: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired
};

export default Habit;
