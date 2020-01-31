import React from 'react';
import { shallow } from 'enzyme';
import QuoteFetcher from './QuoteFetcher';
import { getSimpsonsQuote, getRonQuote } from '../services/quotesApi';

jest.mock('../services/quotesApi.js', () => ({
  getSimpsonsQuote: jest.fn(() => Promise.resolve()),
  getRonQuote: jest.fn(() => Promise.resolve())
}));

describe('QuoteFetcher container', () => {
  it('can change quote providers', () => {
    const wrapper = shallow(<QuoteFetcher />);
    const quoteFetcher = wrapper.instance();

    quoteFetcher.changeQuoteProvider({
      target: {
        value: 'futurama'
      }
    });

    expect(wrapper.state('quoteProvider')).toEqual('futurama');
  });

  it('fetches from the right API based on quoteProvider', () => {
    const wrapper = shallow(<QuoteFetcher />);
    const quoteFetcher = wrapper.instance();

    wrapper.setState({ quoteProvider: 'simpsons' });

    quoteFetcher.fetch();
    expect(getSimpsonsQuote).toHaveBeenCalled();
    expect(getRonQuote).not.toHaveBeenCalled();

    // expect(wrapper.state('quote')).toEqual({
    //   text: 'My Cool Quote',
    //   name: 'A character',
    //   img: '/path/to/image.png'
    // });
  });
});
