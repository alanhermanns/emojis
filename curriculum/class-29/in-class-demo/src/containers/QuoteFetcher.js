import React, { Component } from 'react';
import { getSimpsonsQuote, getRonQuote } from '../services/quotesApi';
import Quote from '../components/quotes/Quote';
import RadioButtons from '../components/commons/radio/RadioButtons';
import Button from '../components/commons/button/Button';

const quoteProviderFactory = {
  simpsons: getSimpsonsQuote,
  ron: getRonQuote
};

export default class QuoteFetcher extends Component {
  state = {
    quoteProvider: 'ron',
    quote: { text: '', name: '', img: '' }
  }

  componentDidMount() {
    this.fetch();
  }

  changeQuoteProvider = ({ target }) => {
    this.setState({ quoteProvider: target.value });
  }

  fetch = () => {
    return quoteProviderFactory[this.state.quoteProvider]()
      .then(quote => this.setState({ quote }));
  }

  render() {
    const { quote } = this.state;
    const radioButtons = [
      { label: 'The Simpsons', value: 'simpsons' },
      { label: 'Ron Swanson', value: 'ron' }
    ];

    return (
      <>
        <RadioButtons radioButtons={radioButtons} name="quoteProvider" onChange={this.changeQuoteProvider} />
        <Quote {...quote} />
        <Button text="Get a new one" onClick={this.fetch} />
      </>
    );
  }
}
