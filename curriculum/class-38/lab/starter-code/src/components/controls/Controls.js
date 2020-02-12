import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ handlers }) => (
  <section className={styles.Controls}>
    {handlers.map(handler => (
      <button key={handler[0]} onClick={handler[1]}>
        {handler[0]} {!!handler[2] && `- ${handler[2]}`}
      </button>
    ))}
  </section>
);

// Controls.propTypes = {
//   actions: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     text: PropTypes.string
//   })).isRequired,
//   handleSelection: PropTypes.func.isRequired
// };

export default Controls;
