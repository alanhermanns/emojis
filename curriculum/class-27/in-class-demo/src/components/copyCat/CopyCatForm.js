import React from 'react';
import PropTypes from 'prop-types';

const CopyCatForm = ({ text, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={text} onChange={onChange} />
    <button>Submit</button>
  </form>
);

CopyCatForm.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CopyCatForm;
