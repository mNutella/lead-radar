// import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';
import HalfColor from '../app/lead-radar/components/HalfColor';
import { JobItem, JobsList } from '../app/lead-radar/components/JobsList';
import Button from '../app/lead-radar/components/Button';


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
              <Button
                route
                link="/post_job"
                size={6}
                classes={['btn-light', 'lift', 'font-weight-bold', 'text-primary', 'rounded-pill']}
              >
                Post Job
              </Button>
            </div>
            <div className="col-sm-5">
              <div className="header">
                <div className="form-group row mb-1 mt-2">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow p-3 bg-white text-center rounded border-0"
                      placeholder="Search by location, role or company"
                    />
                  </div>
                </div>
              </div>
              <JobsList>
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
              </JobsList>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
