import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const MonsterButtons = ({ onAttack, onPotion }) => (
  <>
    <Button label="attack" onClick={onAttack} />
    <Button label="potion" onClick={onPotion} />
  </>
);

MonsterButtons.propTypes = {
  onAttack: PropTypes.func.isRequired,
  onPotion: PropTypes.func.isRequired
};

export default MonsterButtons;
