import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const renderSuccess = () => (
  <React.Fragment>
    <circle className="modal-icon-success-circle" stroke="#A5DC86" strokeWidth="4" cx="41.5" cy="41.5" r="41.5" />
    <polyline className="modal-icon-success-path" id="Path-2" stroke="#A5DC86" strokeWidth="4" points="19 38.8036813 31.1020744 54.8046875 63.299221 28" />
  </React.Fragment>
);

const renderFailed = () => (
  <React.Fragment>
    <circle className="modal-icon-error-circle" stroke="#F74444" strokeWidth="4" cx="41.5" cy="41.5" r="41.5" />
    <path className="modal-icon-error-line1" d="M22.244224,22 L60.4279902,60.1837662" id="Line" stroke="#F74444" strokeWidth="3" strokeLinecap="square" />
    <path className="modal-icon-error-line2" d="M60.755776,21 L23.244224,59.8443492" id="Line" stroke="#F74444" strokeWidth="3" strokeLinecap="square" />
  </React.Fragment>
);

const renderLoading = () => (
  <React.Fragment>
    <circle className="modal-icon-loading-circle" stroke="#007bff" strokeWidth="4" cx="41.5" cy="41.5" r="41.5" />
  </React.Fragment>
);


const renderContainer = (loading, error) => (
  <div className="justify-content-center d-flex">
    <div className="modal-icon">
      <svg viewBox="0 0 87 87" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-1" transform="translate(2.000000, 2.000000)">
            <circle id="Oval-1" stroke="rgba(252, 191, 191, .5)" strokeWidth="4" cx="41.5" cy="41.5" r="41.5" />
            {!loading && !error && renderSuccess()}
            {loading && !error && renderLoading()}
            {error && renderFailed()}
          </g>
        </g>
      </svg>
    </div>
  </div>
);

const RequestStatus = ({
  loading, error, children,
}) => (
  <React.Fragment>
    {renderContainer(loading, error)}
    {children}
  </React.Fragment>
);

RequestStatus.defaultProps = {
  loading: false,
  error: false,
  children: undefined,
};

RequestStatus.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default RequestStatus;
