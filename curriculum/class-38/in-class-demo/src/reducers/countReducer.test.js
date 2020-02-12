import reducer from './countReducer';
import { increment, decrement, incrementBy, changeNumber } from '../actions/countActions';

describe('count reducer', () => {
  it('handles the INCREMENT case', () => {
    const action = increment();
    const initialState = { count: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ count: 2 });
  });

  it('handles the INCREMENT case when initial state is  count 3', () => {
    const action = increment();
    const initialState = { count: 3 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ count: 4 });
  });

  it('handles the DECREMENT case', () => {
    const action = decrement();
    const initialState = { count: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ count: 0 });
  });

  it('handles an action it does not understand gracefully', () => {
    const action = { type: 'SPOT' };
    const initialState = { count: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ count: 1 });
  });

  it('handle an action to INCREMENT_BY', () => {
    const action = incrementBy();
    const initialState = { count: 3, number: 5 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ count: 8, number: 5 });
  });

  it('handle an action to CHANGE_NUMBER', () => {
    const action = changeNumber(8);
    const initialState = { count: 3, number: 4 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ count: 3, number: 8 });
  });
});
