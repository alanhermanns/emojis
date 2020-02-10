import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Habits from '../components/habits/Habits';
import { getHabits } from '../services/habitsApi';

export default class HabitsPage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    habits: []
  }

  searchParams = (location = this.props.location) => {
    return new URLSearchParams(location.search);
  }

  currentPage = (location = this.props.location) => {
    return Number(this.searchParams(location).get('page')) || 1;
  }

  fetchHabits = () => {
    getHabits(this.currentPage())
      .then(habits => this.setState({ habits }));
  }

  componentDidMount() {
    this.fetchHabits();
  }

  componentDidUpdate(previousProps) {
    if(this.currentPage() !== this.currentPage(previousProps.location)) {
      this.fetchHabits();
    }
  }

  previousPage = () => {
    const params = this.searchParams();
    const page = this.currentPage();
    if(page === 1) return;

    params.set('page', page - 1);
    this.props.history.push(`?${params.toString()}`);
  }

  nextPage = () => {
    const params = this.searchParams();
    const page = this.currentPage();

    params.set('page', page + 1);

    // this.props.history.push(`?page=${page + 1}`);
    this.props.history.push(`?${params.toString()}`);
  }

  render() {
    const { habits } = this.state;
    return (
      <>
        <button onClick={this.previousPage}>Previous</button>
        <button onClick={this.nextPage}>Next</button>
        <Habits habits={habits} />
      </>
    );
  }
}
