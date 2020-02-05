import React from 'react';
import { useParams } from 'react-router-dom';

const ColorHeader = () => {
  const { color } = useParams();
  return <h1>{color}</h1>;
};

export default ColorHeader;
