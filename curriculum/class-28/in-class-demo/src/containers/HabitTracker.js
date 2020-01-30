import React, { Component } from 'react';
import HabitForm from '../components/habits/HabitForm';
import Habits from '../components/habits/Habits';

export default class HabitTracker extends Component {
  state = {
    title: '',
    description: '',
    frequency: 0,
    habits: []
  }

  handleChange = ({ target }) => {
    if(target.type === 'number') return this.setState({ [target.name]: Number(target.value) });
    this.setState({ [target.name]: target.value  });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      habits: [...state.habits, {
        title: state.title,
        description: state.description,
        frequency: state.frequency
      }]
    }));
  }

  render() {
    const { title, description, frequency, habits } = this.state;

    return (
      <>
        <HabitForm
          title={title}
          description={description}
          frequency={frequency}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Habits habits={habits} />
      </>
    );
  }
}
