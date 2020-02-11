import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HabitsPage from '../containers/HabitsPage';
import HabitDetailPage from '../containers/HabitDetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HabitsPage} />
        <Route path="/habit/:id" component={HabitDetailPage} />
      </Switch>
    </Router>
  );
}
