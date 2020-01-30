import React from 'react';
import PropTypes from 'prop-types';

const HabitForm = ({ title, description, frequency, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="title" placeholder="Title" value={title} onChange={onChange} />
    <textarea name="description" value={description} onChange={onChange}></textarea>
    <input type="number" name="frequency" placeholder="Frequency" value={frequency} onChange={onChange} />
    <button>Submit</button>
  </form>
);

HabitForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  frequency: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default HabitForm;
