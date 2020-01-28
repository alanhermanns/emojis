import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Health from './Health';
import DataListElement from './DataListElement';

export default class Dog extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired
  }

  render() {
    const { name, age, weight } = this.props;
    return (
      <>
        <Health />
        <dl>
          <DataListElement
            title="Name"
            description={name} />
          <DataListElement
            title="Age"
            description={age} />
          <DataListElement
            title="Weight"
            description={weight} />
        </dl>
      </>
    )
  }
}
