import React, { Component } from 'react';
import Events from '../components/events/Events';
import { getEvents } from '../services/thisDayApi';

const now = new Date();

export default class ThisDay extends Component {
  state = {
    month: (now.getMonth() + 1).toString(),
    day: now.getDate().toString(),
    events: []
  }

  componentDidMount() {
    this.fetchEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.month !== this.state.month || prevState.day !== this.state.day) {
      this.fetchEvents();
    }
  }

  fetchEvents = () => {
    return getEvents(this.state.month, this.state.day)
      .then(events => this.setState({ events }));
  }

  handleDateChange = ({ target }) => {
    // 2020-02-03 -> [2020, 02, 03]
    const [, month, day] = target.value.split('-');
    this.setState({ month, day });
  }

  render() {
    return (
      <>
        <input type="date" value={`2020-${this.state.month}-${this.state.day}`} onChange={this.handleDateChange} />
        <h1>{this.state.month}/{this.state.day}</h1>
        <Events events={this.state.events} />
      </>
    );
  }
}
