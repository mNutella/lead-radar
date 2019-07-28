import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const JobsList = ({ children }) => {
  return (
    <div className="row jobs-list">
      <div className="col-12 p-3">
        {children}
      </div>
    </div>
  );
};

JobsList.defaultProps = {
  children: '',
};

JobsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default JobsList;
