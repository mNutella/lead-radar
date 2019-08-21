import React from 'react';
import Button from '../app/lead-radar/components/Button';

const Press = () => (
  <main className="press-container">
    <div className="container">
      <div className="header">
        <h1 className="display-4">Медиа</h1>
        <h4>Самые новые информационные и медиа ресурсы компании.</h4>
      </div>
      <div className="content">
        <h3 className="font-weight-bold">Описание</h3>
        <p>
          Лид-Радар является ведущей доской по трудоустройству связанной с управлением проектами и
          возможностей лидерства. С сотнями предложений о работе от ведущих компаний, миссия
          Лид-Радар состоит в том, чтобы соединить великих лидеров с выдающимися позициями в
          тщательно подобранном списке организаций.
        </p>
        <p>
          Название:
          <i> Лид-Радар</i>
          <br />
          Краткое описание:
          <i> Управление проектами и лидерские возможности.</i>
          <br />
        </p>
        <p>
          Основатель:
          <i>
            {' '}
            <a href="https://www.linkedin.com/in/dmitry-vladimirov-9069b9147/">Dmitry Vladimirov</a>
          </i>
          <br />
          Дата основания:
          <i> 30 July 2019</i>
          <br />
          Штаб-квартира:
          <i> Пермь, Россия</i>
          <br />
          Финансирование:
          <i> Самофинансирование</i>
        </p>
        <p>
          Сайт:
          <i>
            {' '}
            <a href="https://lead-radar.ru">https://lead-radar.ru</a>
          </i>
          <br />
          Email:
          <i>
            {' '}
            <a href="mailto:mail@lead-radar.co">mail@lead-radar.co</a>
          </i>
          <br />
          Facebook:
          <i>
            {' '}
            <a href="https://www.facebook.com/lead-radar/">https://www.facebook.com/lead-radar/</a>
          </i>
          <br />
          VK:
          <i>
            {' '}
            <a href="https://www.vk.com/lead-radar/">https://www.vk.com/lead-radar/</a>
          </i>
          <br />
          Twitter:
          <i>
            {' '}
            <a href="https://twitter.com/lead-radar/">https://twitter.com/lead-radar/</a>
          </i>
          <br />
          LinkedIn:
          <i>
            {' '}
            <a href="https://www.linkedin.com/company/lead-radar/">
              https://www.linkedin.com/company/lead-radar/
            </a>
          </i>
        </p>
        <h3 className="font-weight-bold">Пресс Кит</h3>
        <p>Самую актуальную информацию о компании, ресурсы бренда и скриншоты можно найти здесь.</p>
        <Button link="#" size={3} classes={['btn-primary', 'lift', 'rounded-pill']}>
          Скачать Пресс-Кит
        </Button>
        <h3 className="font-weight-bold">Аудитория</h3>
        <h5 className="font-weight-bold">Лидеры</h5>
        <p>
          Наши пользователи - опытные дизайнеры, ищущие возможности для лидерских и управленческих
          ролей, как в дизайнерских и рекламных агентствах или студиях, так и в собственных командах
          известных организаций и технологических компаний, от стартапов до крупнейших компаний
          (Газпром, Сбербанк, Mail.ru Group, Yandex и т. д.).
        </p>
        <h5 className="font-weight-bold">Партнеры</h5>
        <p>
          Наши партнеры - это лидеры, работающие в сфере управления проектами и лидерства в качестве
          дисциплины, конференций, программ обучения для руководителей, компаний-разработчиков
          программного обеспечения, средств массовой информации и любой другой компании, пытающейся
          найти высококлассных дизайнеров в ведущих компаниях.
        </p>
        <h3 className="font-weight-bold">Связаться с нами</h3>
        <p>
          Нужно что-нибудь еще? Пожалуйста, напишите нам по адресу
          {' '}
          <a href="#!">press@lead-radar.co</a>
        </p>
      </div>
    </div>
  </main>
);

export default Press;
