import React from 'react';
import { useNameTagText, useNameTagColor, useNameTagBackgroundColor } from '../hooks/nameTag';

const Shape = () => {
  const text = useNameTagText();
  const color = useNameTagColor();
  const backgroundColor = useNameTagBackgroundColor();

  return (
    <div style={{ color, backgroundColor, width: '50vw', height: '50vh' }}>
      {text}
    </div>
  );
};

export default Shape;
