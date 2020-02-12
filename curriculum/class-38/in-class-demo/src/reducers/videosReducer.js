import { ADD_VIDEO, DELETE_VIDEO } from '../actions/videosActions';

export default function reducer(state, action) {
  switch(action.type) {
    case ADD_VIDEO:
      return [action.payload, ...state];
    case DELETE_VIDEO:
      return state.filter(videoId => videoId !== action.payload);
    default:
      return state;
  }
}
