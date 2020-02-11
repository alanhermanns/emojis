import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const HabitDetail = ({ habit, onIncrement, onDelete }) => {
  const handleDelete = () => {
    if(confirm('Are you sure?')) {
      onDelete();
    }
  };

  return (
    <section>
      <h2>{habit.title} <FaTrashAlt onClick={handleDelete} /></h2>
      <p>{habit.description}</p>
      <p>{habit.current} / {habit.goal}</p>
      <progress value={habit.current} max={habit.goal} /><FaPlus onClick={onIncrement} />
    </section>
  );
};

HabitDetail.propTypes = {
  habit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    goal: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default HabitDetail;
