import React, { useState } from 'react';
import PropTypes from 'prop-types';

const VideoForm = ({ submitVideoId }) => {
  const [videoId, setVideoId] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    submitVideoId(videoId);
    setVideoId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={videoId} onChange={({ target }) => setVideoId(target.value)} />
      <button>Submit</button>
    </form>
  );
};

VideoForm.propTypes = {
  submitVideoId: PropTypes.func.isRequired
};

export default VideoForm;
