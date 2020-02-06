import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if(this.state.error) return <h1>Oops! {this.state.error.message}</h1>;

    return this.props.children;
  }
}
