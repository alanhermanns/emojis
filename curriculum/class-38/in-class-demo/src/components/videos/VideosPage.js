import React, { useReducer } from 'react';
import Thumbs from './Thumbs';
import videoReducer from '../../reducers/videosReducer';
import { getThumbnailUrls } from '../../selectors/videosSelectors';
import VideoForm from './VideoForm';
import { addVideo, deleteVideo } from '../../actions/videosActions';

// x7Qe9obIU7w
// w8bm5Sue_0Y
// Vhh_GeBPOhs
// W2ddBwMnFeE
// sP4NMoJcFd4
// RJtRcoTF0S4
const VideosPage = () => {
  const [videos, dispatch] = useReducer(videoReducer, []);
  const thumbnailUrls = getThumbnailUrls(videos);

  const handleDeleteVideo = id => dispatch(deleteVideo(id));

  return (
    <>
      <VideoForm submitVideoId={videoId => dispatch(addVideo(videoId))} />
      <Thumbs thumbnailUrls={thumbnailUrls} onDeleteVideo={handleDeleteVideo} />
    </>
  );
};

VideosPage.propTypes = {};

export default VideosPage;
