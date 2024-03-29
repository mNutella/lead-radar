import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


const renderLinkBtn = (children, link, classes) => (
  <a
    className={`btn btn-block p-3 ${classes.join(' ')}`}
    href={link}
    role="button"
  >
    {children}
  </a>
);

const renderRouteBtn = (children, link, classes) => (
  <Link
    to={link}
    role="button"
    className={`btn btn-block p-3 ${classes.join(' ')}`}
  >
    {children}
  </Link>
);

const renderDefBtn = (children, disabled, type, classes, onClick) => (
  // eslint-disable-next-line react/button-has-type
  <button
    disabled={disabled}
    type={type}
    className={`btn btn-block p-3 ${classes.join(' ')}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const renderBtn = (children, disabled, route, def, link, type, classes, onClick) => {
  if (route) {
    return renderRouteBtn(children, link, classes);
  }
  if (def) {
    return renderDefBtn(children, disabled, type, classes, onClick);
  }
  if (!route && !def) {
    return renderLinkBtn(children, link, classes);
  }

  return <div>Unknown btn type</div>;
};

const Button = ({
  children, disabled, route, def, link, type, size, classes, onClick,
}) => (
  <div className="row">
    <div className={`col-sm-${size}`}>
      {renderBtn(children, disabled, route, def, link, type, classes, onClick)}
    </div>
  </div>
);

Button.defaultProps = {
  disabled: false,
  route: false,
  def: false,
  link: '#!',
  type: 'button',
  size: 12,
  children: undefined,
  classes: [],
  onClick: undefined,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  route: PropTypes.bool,
  def: PropTypes.bool,
  link: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  onClick: PropTypes.any,
};

export default Button;
