/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React from 'react';
import 'react-select/dist/react-select.css';
import Select from 'react-virtualized-select';
import 'react-virtualized-select/styles.css';
import 'react-virtualized/styles.css';
import './style.scss';

const CitySelector = (props) => {
  const {
    name, label, children, classes,
  } = props;
  return (
    <div className="form-group">
      {label !== '' && <label htmlFor={name}>{label}</label>}
      <Select
        style={{ backgroundColor: '#ebe3f9', height: 'calc(1.6em + 1.625rem + 2px)' }}
        className={`custom-selector ${classes.length > 0 && (classes.join(' '))}`}
        {...props}
      />
      {children}
    </div>
  );
};

CitySelector.defaultProps = {
  name: '',
  label: '',
  children: [],
  props: [],
  classes: [],
};

CitySelector.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.any,
};

export default CitySelector;
