import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

import './style.scss';


const renderAvailable = text => (
  <li>
    <span><Icon name="check-circle" classes={['text-primary']} size={20} /></span>
    {text}
  </li>
);

const renderUnavailable = text => (
  <li className="text-muted">
    <span><Icon name="lock" classes={['text-info']} size={20} /></span>
    {text}
  </li>
);

const Plan = ({ title, price }) => (
  <div className="card col-lg-4 plan border-0 lift rounded pt-4 align-items-center plan-active">
    <div className="plan-body">
      <h5 className="plan-title text-muted text-uppercase text-center">{title}</h5>
      <h6 className="plan-price text-center">
        ₽
        {' '}
        {price}
        <span className="plan-period">/месяц</span>
      </h6>
      <hr />
      <ul>
        {renderAvailable('1x Вакансия')}
        {renderAvailable('1x Рассылка')}
        {renderAvailable('1x LinkedIn')}
        {renderAvailable('1x Facebook')}
        {renderAvailable('1x VK')}
        {renderUnavailable('∞ Вакансий')}
        {renderUnavailable('Месячная статистика')}
      </ul>
    </div>
  </div>
);

Plan.defaultProps = {
  title: '',
  price: 0,
};

Plan.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Plan;
