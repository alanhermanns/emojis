import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  CHANGE_NUMBER
} from '../actions/countActions';

// why not mutate?
// this is synchronous?
export default function reducer(state, action) {
  switch(action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY:
      return { ...state, count: state.count + state.number };
    case CHANGE_NUMBER:
      return { ...state, number: action.payload };
    default:
      return state;
  }
}
