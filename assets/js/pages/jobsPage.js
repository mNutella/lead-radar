// import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';
import HalfColor from '../app/lead-radar/components/HalfColor';


const Jobs = () => {
  return (
    <main className="jobs-container">
      <HalfColor />
      <div className="container-fluid h-100">
        <div className="container h-100">
          <div className="row h-100 mx-lg-5 justify-content-center">
            <div className="col-sm-7 align-self-center">
              <div className="row mb-5">
                <div className="col-sm-12 align-self-center text-md-left text-center">
                  <div className="jobs-img" />
                  <h4 className="mt-4 text-white">
                    Reach hundreds of design leaders looking for their next opportunity.
                  </h4>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-sm-6">
                  <button type="button" className="btn btn-light font-weight-bold text-primary btn-block p-3 shadow rounded-pill">Post Job</button>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="header">
                <div className="form-group row">
                  <div className="col-sm-12 mt-5">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow p-3 bg-white text-center rounded-pill border-0"
                      placeholder="Search by location, role or company"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="shadow p-5 mb-5 mt-5 bg-white rounded">Standart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
