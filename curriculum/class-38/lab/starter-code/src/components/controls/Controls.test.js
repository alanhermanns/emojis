import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  let wrapper;
  let handleSelection;
  let actionHandlers = [jest.fn()];

  wrapper = shallow(<Controls handlers={actionHandlers}/>);

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
