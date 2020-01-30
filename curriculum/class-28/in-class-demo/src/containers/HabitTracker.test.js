import React from 'react';
import { shallow } from 'enzyme';
import HabitTracker from './HabitTracker';

describe('HabitTracker component', () => {
  let wrapper;
  let habitTracker;
  beforeEach(() => {
    wrapper = shallow(<HabitTracker />);
    habitTracker = wrapper.instance();
  });

  it('can change title in state', () => {
    habitTracker.handleChange({
      target: {
        name: 'title',
        value: 'My Cool Title'
      }
    });

    expect(wrapper.state('title')).toEqual('My Cool Title');
  });

  it('can change description in state', () => {
    habitTracker.handleChange({
      target: {
        name: 'description',
        value: 'My Description'
      }
    });

    expect(wrapper.state('description')).toEqual('My Description');
  });

  it('can change frequency in state', () => {
    habitTracker.handleChange({
      target: {
        name: 'frequency',
        type: 'number',
        value: '5'
      }
    });

    expect(wrapper.state('frequency')).toEqual(5);
  });

  it('can add a new habit on submit', () => {
    const preventDefault = jest.fn();

    wrapper.setState({
      title: 'My Habit',
      description: 'My Description',
      frequency: 5
    });

    habitTracker.handleSubmit({
      preventDefault
    });

    expect(preventDefault).toHaveBeenCalled();
    expect(wrapper.state('habits')).toEqual([
      {
        title: 'My Habit',
        description: 'My Description',
        frequency: 5
      }
    ]);
  });
});
