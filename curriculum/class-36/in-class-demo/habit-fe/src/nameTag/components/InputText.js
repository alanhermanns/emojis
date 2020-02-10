import React from 'react';
import { useNameTagText, useNameTagHandleChange } from '../hooks/nameTag';

const InputText = () => {
  const text = useNameTagText();
  const onChange = useNameTagHandleChange();

  return (
    <input type="text" name="text" value={text} {...{ onChange }} />
  );
};

export default InputText;
