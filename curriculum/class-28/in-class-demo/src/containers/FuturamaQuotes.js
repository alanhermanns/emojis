import React, { Component } from 'react';
import Quotes from '../components/quotes/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class FuturamaQuotes extends Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    return getQuotes()
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    const { quotes } = this.state;
    return (
      <Quotes quotes={quotes} />
    );
  }
}
