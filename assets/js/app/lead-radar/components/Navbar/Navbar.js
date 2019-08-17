import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useResponsive } from '../../../../utils';

import './style.scss';


const useScroll = () => {
  const [isScrolling, setScroll] = useState(false);

  useEffect(() => {
    const handleScrollPos = () => {
      const lastPosition = window.scrollY;
      if (lastPosition > 50) {
        setScroll(true);
      } else if (isScrolling) {
        setScroll(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScrollPos);

    return () => {
      window.removeEventListener('scroll', handleScrollPos);
    };
  }, []);

  return { scroll: isScrolling };
};

const Navbar = ({ location }) => {
  const locations = ['/', '/jobs', '/post', '/about', '/press'];

  if (!locations.includes(location.pathname)) {
    return <div />;
  }

  const isJobs = location.pathname === '/jobs';
  const navHelper = useScroll();
  const size = useResponsive();

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${isJobs && !size.mobile ? 'navbar-dark' : 'navbar-light'} ${isJobs && !size.mobile ? 'col-md-6' : 'col-md-12'} ${navHelper.scroll ? 'bg-primary navbar-dark shadow' : ''} custom-nav bg-faded`}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">Navbar</Link>
      <div className={`collapse navbar-collapse ${isJobs ? 'justify-content-right' : ''} pl-3 rounded ${!navHelper.scroll && size.mobile ? 'shadow bg-primary' : ''}`} id="main-navbar">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/jobs">Jobs</Link>
          <Link className="nav-item nav-link" to="/post">Post</Link>
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
