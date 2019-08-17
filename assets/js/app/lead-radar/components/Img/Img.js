import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const Img = ({ name }) => (
  <div
    className={`custom-img ${name ? `img-${name}` : ''}`}
  />
);

Img.defaultProps = {
  name: '',
};

Img.propTypes = {
  name: PropTypes.string,
};

export default Img;
