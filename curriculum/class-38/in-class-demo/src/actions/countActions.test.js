import {
  INCREMENT,
  increment,
  DECREMENT,
  decrement,
  INCREMENT_BY,
  incrementBy,
  CHANGE_NUMBER,
  changeNumber
} from './countActions';

describe('count action creators', () => {
  it('creates an increment action', () => {
    const action = increment();

    expect(action).toEqual({ type: INCREMENT });
  });

  it('creates a decrement action', () => {
    const action = decrement();

    expect(action).toEqual({ type: DECREMENT });
  });

  it('creates an increment by action', () => {
    const action = incrementBy();

    expect(action).toEqual({ type: INCREMENT_BY });
  });

  it('creates a change number action', () => {
    const action = changeNumber(5);

    expect(action).toEqual({
      type: CHANGE_NUMBER,
      payload: 5
    });
  });

  it('creates a change number action when number is a string', () => {
    const action = changeNumber('5');

    expect(action).toEqual({
      type: 'CHANGE_NUMBER',
      payload: 5
    });
  });

  it('create a change number action when a character is passed', () => {
    expect(() => changeNumber('a')).toThrow('a is not a number');
  });
});
