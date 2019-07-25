// import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';


const About = () => {
  return (
    <main className="about-container">
      <div className="container">
        <div className="header">
          <h1 className="display-4">About</h1>
          <h4>
            Boooom is a curated list of leadership job opportunities for designers.
            We want to help great designers connect with great companies.
          </h4>
        </div>
        <div className="content">
          <h3>A network of partners and sponsors</h3>
          <p>
            Our audience is primarily composed of designers looking for opportunities in
            leadership and management roles. They are usually not in a hurry,
            but will act fast if the perfect opportunity comes by.
            New visitors come here mainly by reference from their peers or
            organically through specialized design communities and media outlets.
            Monthly, we post dozens of job opportunities in awesome companies from all over the world.
          </p>
          <p>
            We foster partnerships with key communities, organizations and
            events to help the advancement of the discipline.
            By showing the value of design for business,
            design management and leadership becomes a strategic asset for organizations.
            Many leadership roles are filled off-market just by reference,
            taking several months, just because there wasn’t an efficient way to get to this audience.
            Not anymore.
          </p>
          <p>
            Would like to discuss a sponsorship opportunity?
            Email us at <a href="#">partners@lead-radar.co</a>.
          </p>
          <h3>Who are we?</h3>
          <p>Boooom is run by Tiago Machado and João Alfaiate.</p>
          <h3>Keep up to date</h3>
          <p>We’re live on Twitter, LinkedIn and Facebook, but also publish an awesome newsletter.</p>
          <h3>Keep up to date</h3>
          <p>We’re live on Twitter, LinkedIn and Facebook, but also publish an awesome newsletter.</p>
          <h3>Contact us</h3>
          <a href="#">mail@lead-radar.co</a>
        </div>
      </div>
    </main>
  );
};

export default About;
