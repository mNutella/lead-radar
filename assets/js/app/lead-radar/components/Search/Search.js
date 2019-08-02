import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

import './style.scss';


const Search = ({
  defVal, ph, found, onChange,
}) => (
  <div className="input-group input-group-lg rounded shadow">
    <div className="input-group-prepend">
      <span className="input-group-text border-0 pr-1 bg-white">
        <Icon name="search" size={22} />
      </span>
    </div>
    <input
      type="text"
      aria-label="Search jobs"
      defaultValue={defVal}
      placeholder={ph}
      className="form-control border-0 px-1"
      onChange={onChange}
    />
    {found !== 0 && (
      <div className="input-group-append">
        <span className="input-group-text bg-white border-0 pl-1">
          <span className="h6 text-uppercase text-right text-muted d-none d-md-block mb-0">
            {found} найдено
          </span>
        </span>
      </div>
    )}
  </div>
);

Search.defaultProps = {
  defVal: '',
  ph: '',
  found: 0,
  onChange: undefined,
};

Search.propTypes = {
  defVal: PropTypes.string,
  ph: PropTypes.string,
  found: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  onChange: PropTypes.any,
};

export default Search;
