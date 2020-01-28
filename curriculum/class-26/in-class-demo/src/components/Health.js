import React, { Component } from 'react';

export default class Health extends Component {
  render() {
    return (
      <progress
        max={100}
        value={70}>
      </progress>
    )
  }
}
