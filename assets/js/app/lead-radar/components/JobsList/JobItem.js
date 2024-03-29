import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import Button from '../Button';
import Icon from '../Icon';

import './style.scss';

const JobItem = ({
  // eslint-disable-next-line no-unused-vars
  id, company, title, link, city, date,
}) => (
  <div className="card job-card rounded mb-3">
    <span className="card-body">
      <p className="text-muted">
        <Moment fromNow>{date}</Moment>
      </p>
      <h4>{title}</h4>
      <h5 className="text-primary">{company}</h5>
      <p className="text-muted ">{city}</p>
      <Button link={link} size={12} classes={['btn-primary', 'lift', 'rounded-pill']}>
        Посмотреть
        <Icon name="arrow-right" size={16} classes={['pl-2']} />
      </Button>
    </span>
  </div>
);

JobItem.defaultProps = {
  id: '',
  company: 'Company',
  title: 'Title',
  link: '#',
  city: 'City',
  date: 'Date',
};

JobItem.propTypes = {
  id: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  city: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  date: PropTypes.any,
};

export default JobItem;
