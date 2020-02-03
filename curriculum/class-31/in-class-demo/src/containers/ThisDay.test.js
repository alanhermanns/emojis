import React from 'react';
import { shallow } from 'enzyme';
import ThisDay from './ThisDay';
import { getEvents } from '../services/thisDayApi';

jest.mock('../services/thisDayApi.js');

describe('ThisDay container', () => {
  it('can change the month and day state', () => {
    const wrapper = shallow(<ThisDay />);
    const thisDay = wrapper.instance();

    thisDay.handleDateChange({
      target: {
        value: '2020-02-04'
      }
    });

    expect(wrapper.state('month')).toEqual('02');
    expect(wrapper.state('day')).toEqual('04');
  });

  it('can fetch events and set state', () => {
    const wrapper = shallow(<ThisDay />);
    const thisDay = wrapper.instance();

    wrapper.setState({
      month: '02',
      day: '11'
    });

    return thisDay.fetchEvents()
      .then(() => {
        expect(getEvents).toHaveBeenCalledWith('02', '11');
        expect(wrapper.state('events')).toEqual([
          { year: '2020', text: 'you made this' },
          { year: '2019', text: 'you thought about making this' }
        ]);
      });
  });
});
