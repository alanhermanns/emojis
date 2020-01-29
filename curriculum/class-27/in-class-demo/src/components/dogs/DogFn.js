import React from 'react';
import  PropTypes from 'prop-types';
import styles from './Dog.css';

const Dog = ({ name, age, weight }) => {
  const speak = () => {
    console.log('woof');
  };

  return (
    <dl className={styles.Dog}>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      {weight ? (
        <>
          <dt>Weight</dt>
          <dd>{weight}</dd>
        </>
      ) : <p>No Weight sorry</p>}
      <button onClick={speak}>Speak</button>
    </dl>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string
};

export default Dog;
