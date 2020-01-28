import React, { Component } from 'react';

export default class Age extends Component {
  render() {
    const { age } = this.props;

    return (
      <>
        <dt>Age</dt>
        <dd>{age}</dd>
      </>
    )
  }
}
