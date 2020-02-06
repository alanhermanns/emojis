import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';

const Sidebar = ({ children }) => {
  return (
    <section className={styles.Sidebar}>
      {children}
    </section>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
