import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('renders Dog', () => {
    const wrapper = shallow(<Dog name="Spot" age={5} weight="20 lbs"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
