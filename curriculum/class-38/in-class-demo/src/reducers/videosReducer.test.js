import reducer from './videosReducer';
import { addVideo, deleteVideo } from '../actions/videosActions';

describe('videos reducer', () => {
  it('handles a bogus action gracefully', () => {
    const action = { type: 'BOGUS' };

    const newState = reducer([], action);

    expect(newState).toEqual([]);
  });

  it('handles the add video action', () => {
    const action = addVideo('1234');
    const initialState = [];

    const newState = reducer(initialState, action);

    expect(newState).toEqual([
      '1234'
    ]);
  });

  it('handles the add video action with existing videos in state', () => {
    const action = addVideo('1234');
    const initialState = ['3456'];

    const newState = reducer(initialState, action);

    expect(newState).toEqual([
      '1234',
      '3456'
    ]);
  });

  it('handles the delete video action', () => {
    const action = deleteVideo('1234');
    const initialState = ['3456', '1234', '7890'];

    const newState = reducer(initialState, action);

    expect(newState).toEqual([
      '3456',
      '7890'
    ]);
  });
});
