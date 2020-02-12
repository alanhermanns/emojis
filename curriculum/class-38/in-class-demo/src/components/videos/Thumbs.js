import React from 'react';
import PropTypes from 'prop-types';
import Thumb from './Thumb';
import { Link } from 'react-router-dom';

const Thumbs = ({ thumbnailUrls, onDeleteVideo }) => {
  const thumbnailElements = thumbnailUrls.map(({ thumbnailUrl, videoId }) => (
    <li key={videoId}>
      <Link to={`/${videoId}`}>
        {/* <Thumb thumbnailUrl={thumbnailUrl} onDeleteVideo={onDeleteVideo.bind(null, videoId)} /> */}
        <Thumb thumbnailUrl={thumbnailUrl} onDeleteVideo={() => onDeleteVideo(videoId)} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {thumbnailElements}
    </ul>
  );
};

Thumbs.propTypes = {
  thumbnailUrls: PropTypes.arrayOf(PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired
  })).isRequired,
  onDeleteVideo: PropTypes.func.isRequired
};

export default Thumbs;
