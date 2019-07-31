import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const Input = ({
  label, type, ph, defVal, children, classes, onChange,
}) => (
  <div className="form-group">
    {label !== '' && (<label>{label}</label>)}
    <input
      type={type}
      defaultValue={defVal}
      className={`form-control ${classes.join(' ')}`}
      placeholder={ph}
      onChange={onChange}
    />
    {children}
  </div>
);

Input.defaultProps = {
  label: '',
  ph: '',
  type: 'text',
  defVal: '',
  children: undefined,
  classes: [],
  onChange: undefined,
};

Input.propTypes = {
  label: PropTypes.string,
  ph: PropTypes.string,
  type: PropTypes.string,
  defVal: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  onChange: PropTypes.any,
};

export default Input;
