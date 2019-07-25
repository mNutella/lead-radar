import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-expand-md fixed-top navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">Navbar</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/post_job">Post</Link>
          <Link className="nav-item nav-link" to="/about">About</Link>
          <Link className="nav-item nav-link" to="/press">Press</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
