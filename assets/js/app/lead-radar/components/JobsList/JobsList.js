import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const JobsList = ({ children }) => <React.Fragment>{children}</React.Fragment>;

JobsList.defaultProps = {
  children: undefined,
};

JobsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default JobsList;
