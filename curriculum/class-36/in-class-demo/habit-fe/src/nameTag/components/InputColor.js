import React from 'react';
import { useNameTagColor, useNameTagBackgroundColor, useNameTagHandleChange } from '../hooks/nameTag';

const InputColor = () => {
  const color = useNameTagColor();
  const backgroundColor = useNameTagBackgroundColor();
  const onChange = useNameTagHandleChange();
  
  return (
    <>
      <input type="color" name="color" value={color} onChange={onChange} />
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={onChange} />
    </>
  );
};

export default InputColor;
