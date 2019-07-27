import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


const Navbar = ({ location }) => {
  const isLight = location.pathname === '/jobs';

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${isLight ? 'navbar-dark' : 'navbar-light'}  bg-faded`}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">Navbar</Link>
      <div className="collapse navbar-collapse pl-3 rounded" id="main-navbar">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/jobs">Jobs</Link>
          <Link className="nav-item nav-link" to="/post_job">Post</Link>
          <Link className="nav-item nav-link" to="/about">About</Link>
          <Link className="nav-item nav-link" to="/press">Press</Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  location: undefined,
};

Navbar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.any,
};

export default Navbar;
