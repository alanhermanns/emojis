import React from 'react';
import PropTypes from 'prop-types';

const Thumb = ({ thumbnailUrl, onDeleteVideo }) => (
  <>
    <img src={thumbnailUrl} />
    <button onClick={event => {
      event.preventDefault();
      onDeleteVideo();
    }}>🗑️</button>
  </>
);

Thumb.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  onDeleteVideo: PropTypes.func.isRequired
};

export default Thumb;
