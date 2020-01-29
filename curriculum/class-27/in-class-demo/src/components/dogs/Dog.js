import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dog.css';

export default class Dog extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    weight: PropTypes.string
  }

  speak = () => {
    console.log('woof');
  }

  render() {
    const { name, age, weight } = this.props;

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
        <button onClick={this.speak}>Speak</button>
      </dl>
    );
  }
}
