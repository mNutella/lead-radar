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
}) => {
  return (
    <div className="job-card rounded mb-3">
      <div className="card">
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
            link="#"
            size={12}
            classes={['btn-primary', 'lift', 'rounded-pill']}
          >
            Посмотреть
          </Button>
        </span>
      </div>
    </div>
  );
};

JobsItem.defaultProps = {
  id: '',
  company: 'Лукойл',
  title: 'Руководитель направления службы поддержки клиентов в Яндекс. Маркет',
  link: '#',
  city: 'Москва',
  date: '31 Июля',
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
