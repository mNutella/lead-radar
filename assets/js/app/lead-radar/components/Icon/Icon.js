import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const Icon = ({ name, size, classes }) => (
  <i className={`fe fe-${name} ${classes.join(' ')}`} style={{ fontSize: size }} />
);

Icon.defaultProps = {
  name: 'home',
  size: 16,
  classes: [],
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.any,
};

export default Icon;
