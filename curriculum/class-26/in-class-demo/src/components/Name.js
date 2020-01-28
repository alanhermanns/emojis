import React, { Component } from 'react';

export default class Name extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <dt>Name</dt>
        <dd>{name}</dd>
      </>
    )
  }
}
