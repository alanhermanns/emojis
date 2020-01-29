import React from 'react';
import PropTypes from 'prop-types';

const Monster = ({ img, name }) => (
  <>
    <figure>
      <img src={img} />
      <figcaption>{name}</figcaption>
    </figure>
  </>
);

Monster.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Monster;
