import { addVideo, ADD_VIDEO, DELETE_VIDEO, deleteVideo } from './videosActions';

describe('videos actions', () => {
  it('creates an add video action', () => {
    const action = addVideo('12345');

    expect(action).toEqual({
      type: ADD_VIDEO,
      payload: '12345'
    });
  });

  it('creates a delete video action', () => {
    const action = deleteVideo('12345');

    expect(action).toEqual({
      type: DELETE_VIDEO,
      payload: '12345'
    });
  });
});
