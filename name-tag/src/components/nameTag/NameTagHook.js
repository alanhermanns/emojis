import React from 'react';
import TextSelector from './TextSelector';
import ColorSelector from './ColorSelector';
import Shape from './Shape';
import { useNameTag } from '../../hooks/nameTag';

export default function NameTagHook() {
  const { text, color, backgroundColor, handleChange } = useNameTag();

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
