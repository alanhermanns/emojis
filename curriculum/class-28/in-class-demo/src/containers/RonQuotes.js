import React, { Component } from 'react';
import Quotes from '../components/quotes/Quotes';
import { getQuotes } from '../services/ronApi';

export default class RonQuotes extends Component {
  state = {
    loading: true,
    quotes: []
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({ loading: true });
    return getQuotes()
      .then(quotes => this.setState({ quotes, loading: false }));
  }

  render() {
    const { quotes, loading } = this.state;
    if(loading) return <img src="https://media.giphy.com/media/XsluJXldzBpmw/giphy.gif" />;

    return (
      <Quotes quotes={quotes} />
    );
  }
}
