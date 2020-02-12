import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import VideosPage from './videos/VideosPage';
import VideoPlayer from './videos/VideoPlayer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VideosPage} />
        <Route path="/:videoId" component={VideoPlayer} />
      </Switch>
    </Router>
  );
}

// export default function App() {
//   const [{ count, number }, dispatch] = useReducer(reducer, { count: 0, number: 2 });

//   return (
//     <>
//       <input type="number" value={number} onChange={({ target }) => dispatch(changeNumber(target.value))} />
//       <button onClick={() => dispatch(incrementBy())}>Increment by {number}</button>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <p>{count}</p>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </>
//   );
// }
