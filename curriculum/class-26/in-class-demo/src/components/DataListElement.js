import React, { Component } from 'react';

export default class DataListElement extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </>
    )
  }
}
