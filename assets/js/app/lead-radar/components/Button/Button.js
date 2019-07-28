import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


const Button = ({ children, route, link, size, classes }) => {
  return (
    <div className="row">
      <div className={`col-sm-${size}`}>
        {route ? (
          <Link className={`btn btn-block p-3 ${classes.join(' ')}`} to={link} role="button">
            {children}
          </Link>
        ) : (
          <a className={`btn btn-block p-3 ${classes.join(' ')}`} href={link} role="button">
            {children}
          </a>
        )
        }
      </div>
    </div>
  );
};

Button.defaultProps = {
  route: false,
  link: '#!',
  size: 12,
  children: undefined,
  classes: [],
};

Button.propTypes = {
  route: PropTypes.bool,
  link: PropTypes.string,
  size: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.any,
};

export default Button;
