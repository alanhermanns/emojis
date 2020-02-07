import React, { Component } from 'react';
import TextSelector from '../components/nameTag/TextSelector';
import ColorSelector from '../components/nameTag/ColorSelector';
import Shape from '../components/nameTag/Shape';

export default class NameTag extends Component {
  state = {
    text: 'NameTag',
    color: '#00FF00',
    backgroundColor: '#FF0000',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color, backgroundColor } = this.state;
    return (
      <>
        <TextSelector
          text={text}
          onChange={this.handleChange} />

        <ColorSelector
          color={color}
          backgroundColor={backgroundColor}
          onChange={this.handleChange} />

        <Shape
          text={text}
          color={color}
          backgroundColor={backgroundColor} />
      </>
    );
  }
}
