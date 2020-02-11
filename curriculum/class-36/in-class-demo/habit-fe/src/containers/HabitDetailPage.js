import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HabitDetail from '../components/habits/HabitDetail';
import { getHabit, delHabit, patchHabit } from '../services/habitsApi';

export default class HabitDetailPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    habit: {},
    loading: true,
    error: null
  }

  fetchHabit = () => {
    this.setState({ loading: true, error: null });
    getHabit(this.props.match.params.id)
      .then(habit => this.setState({ habit }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  componentDidMount() {
    this.fetchHabit();
  }

  handleIncrement = () => {
    patchHabit(this.props.match.params.id)
      .then(habit => this.setState({ habit }));
  }

  handleDelete = () => {
    delHabit(this.props.match.params.id)
      .then(() => {
        this.props.history.replace('/');
      });
  }

  render() {
    const { habit, loading, error } = this.state;
    if(error) return <h1>Unable to fetch habit: {error.message}</h1>;
    if(loading) return <h1>Loading</h1>;

    return (
      <HabitDetail habit={habit} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
    );
  }
}
