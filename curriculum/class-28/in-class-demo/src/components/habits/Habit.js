import React from 'react';
import PropTypes from 'prop-types';

const Habit = ({ habit }) => (
  <section>
    <h2>{habit.title}</h2>
    <p>{habit.description}</p>
    <progress max={habit.frequency} value={0} />
  </section>
);

Habit.propTypes = {
  habit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    frequency: PropTypes.number.isRequired
  }).isRequired
};

export default Habit;
