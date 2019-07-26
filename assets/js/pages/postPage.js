/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';


const Post = () => {
  return (
    <main className="post-container">
      <div className="container">
        <div className="header">
          <h1 className="display-4">Post a Job</h1>
          <h4>
            Reach hundreds of design leaders looking for their next opportunity.
          </h4>
        </div>
        <div className="content">
          <h3>Create your listing</h3>
          <p>
            Thanks for considering Lead-Radar! We kindly ask that you write the job post in English.
            Please note that the job post should be for a leadership or
            management design role (e.g., director, manager, lead, head, principal, vp, etc.).
          </p>
          <form>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company-name"
                  type="text"
                  className="form-control form-control bg-light rounded-pill border-0"
                  placeholder="Yandex"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="job-title">Job title</label>
                <input
                  id="job-title"
                  name="job-title-name"
                  type="text"
                  className="form-control form-control bg-light rounded-pill border-0"
                  placeholder="Team Lead"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="link-to-desc">Link to job description</label>
                <input
                  id="link-to-desc"
                  name="link-to-desc-name"
                  type="text"
                  className="form-control form-control bg-light rounded-pill border-0"
                  placeholder="https://www.linkedin.com/jobs/view/1381919900/"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="contact-email">Contact email</label>
                <input
                  id="contact-email"
                  name="contact-email-name"
                  type="email"
                  className="form-control form-control bg-light rounded-pill border-0"
                  placeholder="job@yandex.ru"
                />
                <small id="email-help" className="form-text text-muted">We&#39;ll never share your email with anyone else.</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="shadow p-5 mb-5 mt-5 bg-white rounded">Standart</div>
              </div>
            </div>
            <p>
              Your submission will be reviewed within 24–48 hours.
              We&#39;ll email you the payment instructions, ask you for the information
              to include in the invoice, and also ask you to verify the job post details.
              After the payment is confirmed the job post will be published for 30 days.
              If you have any questions, don&#39;t hesitate to get in touch.
            </p>
            <div className="row">
              <div className="col-md-3">
                <button type="button" className="btn btn-primary btn-block p-3 shadow rounded-pill">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Post;
