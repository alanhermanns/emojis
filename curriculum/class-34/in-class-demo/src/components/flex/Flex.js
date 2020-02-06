import React from 'react';
import PropTypes from 'prop-types';
import styles from './Flex.css';
import { If, Unless } from '../conditionals/If';

const Flex = ({ children, title }) => (
  <>
    <If condition={!!title}>
      <h2>{title}</h2>
    </If>
    <Unless condition={!!title}>
      <h2>No Title</h2>
    </Unless>
    <section className={styles.Flex}>
      {children}
    </section>
  </>
);

Flex.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Flex;
