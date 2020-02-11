import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TODO: maybe a different name here
const HabitForm = ({ submitHabit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState(1);

  const handleSubmit = event => {
    event.preventDefault();
    submitHabit(title, description, goal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)} />
      <textarea value={description} onChange={({ target }) => setDescription(target.value)}></textarea>
      <input type="number" name="goal" value={goal} onChange={({ target }) => setGoal(Number(target.value))} />
      <button>Submit</button>
    </form>
  );
};

HabitForm.propTypes = {
  submitHabit: PropTypes.func.isRequired
};

export default HabitForm;
