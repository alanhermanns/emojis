import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ match }) => {
  return (
    <iframe src={`https://www.youtube.com/embed/${match.params.videoId}`} />
  );
};

VideoPlayer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      videoId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default VideoPlayer;
