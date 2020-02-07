import React, { useState } from 'react';
import TextSelector from '../components/nameTag/TextSelector';
import ColorSelector from '../components/nameTag/ColorSelector';
import Shape from '../components/nameTag/Shape';

export default function NameTagFn() {
  const [text, setText] = useState('NameTagFn');
  const [color, setColor] = useState('#00FF00');
  const [backgroundColor, setBackgroundColor] = useState('#FF0000');

  const inputFactoryMethod = {
    text: setText,
    color: setColor,
    backgroundColor: setBackgroundColor
  };

  const handleChange = ({ target }) => {
    inputFactoryMethod[target.name](target.value);
  };

  return (
    <>
      <TextSelector
        text={text}
        onChange={handleChange} />

      <ColorSelector
        color={color}
        backgroundColor={backgroundColor}
        onChange={handleChange} />

      <Shape
        text={text}
        color={color}
        backgroundColor={backgroundColor} />
    </>
  );
}
