import React from 'react';
import PropTypes from 'prop-types';



// const Health = ({ health }) => {
//   return (
//     <progress max={100} value={health} />
//   );
// };

// const Health = ({ health }) => <progress max={100} value={health} />;

const Health = ({ health }) => (
  <>
    <h1>Health</h1>
    <progress max={100} value={health} />
  </>
);

Health.propTypes = {
  health: PropTypes.number.isRequired
};

export default Health;
