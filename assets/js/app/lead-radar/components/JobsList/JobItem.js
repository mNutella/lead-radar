import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

import './style.scss';


const JobsItem = ({
  id,
  company,
  title,
  link,
  city,
  date,
}) => (
  <div className="card job-card rounded mb-3">
    <span className="card-body">
      <p className="text-muted">
        <time dateTime="2019-05-31">{date}</time>
      </p>
      <h4>
        {title}
      </h4>
      <h5 className="text-primary">
        {company}
      </h5>
      <p className="text-muted ">
        {city}
      </p>
      <Button
        link={link}
        size={12}
        classes={['btn-primary', 'lift', 'rounded-pill']}
      >
        Посмотреть
      </Button>
    </span>
  </div>
);

JobsItem.defaultProps = {
  id: '',
  company: 'Company',
  title: 'Title',
  link: '#',
  city: 'City',
  date: 'Date',
};

JobsItem.propTypes = {
  id: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  city: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  date: PropTypes.any,
};

export default JobsItem;
