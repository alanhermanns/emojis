import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders ColorSelector', () => {
    const wrapper = shallow(<ColorSelector
      color="#000000"
      backgroundColor="#FFFFFF"
      onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
