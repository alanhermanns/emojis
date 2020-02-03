import React, { useState } from 'react';
import ColorControls from '../components/colors/ColorControls';
import ColorDisplay from '../components/colors/ColorDisplay';

const ColorPickerFn = () => {
  // [state, setState]
  const [color, setColor] = useState('#FF0000');
  const changeColor = color => setColor(color);

  return (
    <>
      <ColorControls color={color} setColor={changeColor} />
      <ColorDisplay color={color} />
    </>
  );
};

export default ColorPickerFn;
