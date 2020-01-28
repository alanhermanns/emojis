import React, { Component } from 'react';

export default class Weight extends Component {
  render() {
    const { weight } = this.props;

    return (
      <>
        <dt>Weight</dt>
        <dd>{weight}</dd>
      </>
    )
  }
}
