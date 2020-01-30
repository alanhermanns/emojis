import React from 'react';
import { shallow } from 'enzyme';
import FuturamaQuotes from './FuturamaQuotes';

jest.mock('../services/futuramaApi.js');

describe('FuturamaQuotes container', () => {
  it('can fetch from the futurama api and set state', () => {
    const wrapper = shallow(<FuturamaQuotes />);
    const futuramaQuotes = wrapper.instance();

    return futuramaQuotes.fetch()
      .then(() => {
        expect(wrapper.state('quotes')).toEqual([
          { text: 'my quote', name: 'Me', image: 'your image' },
          { text: 'my quote2', name: 'you', image: 'my image' }
        ]);
      });
  });
});
