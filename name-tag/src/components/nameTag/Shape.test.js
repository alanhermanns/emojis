import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders Shape', () => {
    const wrapper = shallow(<Shape
      text="hi"
      color="#FF0000"
      backgroundColor="#00FF00" />);
    expect(wrapper).toMatchSnapshot();
  });
});
