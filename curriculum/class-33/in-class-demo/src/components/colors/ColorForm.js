import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ColorForm = () => {
  const [color, setColor] = useState('');
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/color/${encodeURIComponent(color)}`);
  };

  const handleChange = ({ target }) => setColor(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="color" value={color} onChange={handleChange} />
      <button>Go to color!</button>
    </form>
  );
};

export default ColorForm;
