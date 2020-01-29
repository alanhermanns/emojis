import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Health extends Component {
  static propTypes = {
    health: PropTypes.number.isRequired
  }

  render() {
    const { health } = this.props;
    return (
      <progress max={100} value={health} />
    );
  }
}
