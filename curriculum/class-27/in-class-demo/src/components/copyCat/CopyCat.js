import React, { Component } from 'react';
import CopyCatForm from './CopyCatForm';
import CopyCatDisplay from './CopyCatDisplay';

export default class CopyCat extends Component {
  state = {
    text: 'CopyCat',
    displayText: ''
  }

  handleChange = ({ target }) => {
    // independent state change
    this.setState({ text: target.value }, () => {
      console.log('after this.setState', this.state.text);
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // dependent state change
    this.setState(state => ({ displayText: state.text }));
  }

  render() {
    const { text, displayText } = this.state;
    return (
      <>
        <CopyCatForm
          text={text}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
        <CopyCatDisplay displayText={displayText} />
      </>
    );
  }
}
