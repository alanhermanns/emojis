import React from 'react';
import PropTypes from 'prop-types';

const MonsterHealth = ({ health }) => (
  <progress max={100} value={health} />
);

MonsterHealth.propTypes = {
  health: PropTypes.number.isRequired
};

export default MonsterHealth;
