import { useState } from 'react';

export const useNameTag = () => {
  const [text, setText] = useState('NameTagHook');
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

  return { text, color, backgroundColor, handleChange };
};
