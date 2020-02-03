import React, { Component } from 'react';
import ColorControls from '../components/colors/ColorControls';
import ColorDisplay from '../components/colors/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    color: '#FF0000'
  }

  setColor = (color) => {
    this.setState({ color });
  }

  render() {
    return (
      <>
        <ColorControls color={this.state.color} setColor={this.setColor} />
        <ColorDisplay color={this.state.color} />
      </>
    );
  }
}
