import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const HalfColor = ({ horizontal, invert }) => (
  <div
    className="half-bg"
    style={{
      // top: invert ? 'auto' : '0',
      // bottom: invert ? '0' : 'auto',
      // right: invert ? '0' : 'auto',
      // left: invert ? 'auto' : '0',
      width: horizontal ? '100%' : '55%',
      height: horizontal ? '55%' : '100%',
      transform: invert ? 'translateX(0)' : 'translateX(-100%)',
    }}
  />
);

HalfColor.defaultProps = {
  horizontal: false,
  invert: false,
};

HalfColor.propTypes = {
  horizontal: PropTypes.bool,
  invert: PropTypes.bool,
};

export default HalfColor;
