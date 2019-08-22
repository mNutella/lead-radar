/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import './style.scss';

const Input = ({
  name, label, type, ph, defVal, focus, children, classes, onChange,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="form-group">
      {label !== '' && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        type={type}
        ref={inputRef}
        defaultValue={defVal}
        className={`form-control ${classes.join(' ')}`}
        placeholder={ph}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

Input.defaultProps = {
  name: '',
  label: '',
  ph: '',
  type: 'text',
  defVal: '',
  focus: false,
  children: undefined,
  classes: [],
  onChange: undefined,
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  ph: PropTypes.string,
  type: PropTypes.string,
  defVal: PropTypes.string,
  focus: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  onChange: PropTypes.any,
};

export default Input;
