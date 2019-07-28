// import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';
import HalfColor from '../app/lead-radar/components/HalfColor';
import Button from '../app/lead-radar/components/Button';

import './style.scss';


const Home = () => {
  return (
    <main className="home-container">
      <HalfColor invert />
      <div className="container-fluid h-100">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-content-center">
            <div className="col align-self-end">
              <h1 className="mb-4">FIND YOUR JOB</h1>
              <form>
                <div className="form-group row">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow p-3 bg-white rounded border-0"
                      placeholder="Search by location, role or company"
                    />
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <div className="col-8">
                    <select
                      defaultValue="City"
                      className="form-control form-control-lg shadow p-3 bg-white rounded border-0"
                    >
                      <option value="City" disabled>City</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
                <Button
                  route
                  link="/jobs"
                  size={8}
                  classes={['btn-primary', 'lift', 'font-weight-bold', 'rounded-pill']}
                >
                  Search
                </Button>
              </form>
            </div>
            <div className="col">
              <img className="img-fluid mb-4" src="https://www.kraken.com/_assets/files/2019-04/Advanced4.png" alt="finder" />
              <Button
                route
                link="/post_job"
                size={6}
                classes={['btn-light', 'lift', 'font-weight-bold', 'text-primary', 'rounded-pill']}
              >
                Post Job
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
