import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HabitsPage from '../containers/HabitsPage';
import HabitDetailPage from '../containers/HabitDetailPage';
import Login from './auth/Login';
import { SessionProvider } from '../hooks/auth';

export default function App() {
  return (
    <Router>
      <SessionProvider>
        <Switch>
          <Route exact path="/" component={HabitsPage} />
          <Route path="/login" component={Login} />
          <Route path="/habit/:id" component={HabitDetailPage} />
        </Switch>
      </SessionProvider>
    </Router>
  );
}
