import React, { Component } from 'react';
import Dog from './Dog';

// const dog = new Dog({ name: 'spot' });

export default class App extends Component {
  render() {
    return (
      <>
        <h1>My Dog Spot</h1>
        <Dog name="Spot" age={5} />
        <Dog name="Rover" age={10} weight="50 lbs" />
      </>
    );
  }
}
