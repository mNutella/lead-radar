import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const PricingTable = ({ children }) => (
  <div className="row pricing-table">
    {children}
  </div>
);

PricingTable.defaultProps = {
  children: [],
};

PricingTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default PricingTable;
