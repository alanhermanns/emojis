import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
  it('can change color in state', () => {
    const wrapper = shallow(<ColorPicker />);
    const colorPicker = wrapper.instance();

    colorPicker.setColor('#0000FF');

    expect(wrapper.state('color')).toEqual('#0000FF');
  });
});
