import React from 'react';
import ColorHeader from './ColorHeader';
import ColorDisplay from './ColorDisplay';
import ColorForm from './ColorForm';

const Color = () => {
  return (
    <>
      <ColorForm />
      <ColorHeader />
      <ColorDisplay />
    </>
  );
};

Color.propTypes = {

};

export default Color;
