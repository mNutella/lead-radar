// import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';
import Button from '../app/lead-radar/components/Button';


const Press = () => {
  return (
    <main className="press-container">
      <div className="container">
        <div className="header">
          <h1 className="display-4">Press</h1>
          <h4>
            The most up-to-date company information and media resources.
          </h4>
        </div>
        <div className="content">
          <h3>Overview</h3>
          <p>
            Lead-Radar is a leading job board for design management and leadership opportunities.
            With hundreds of job offers from top companies in 25+ countries,
            Lead-Radar’s mission is to connect great design leaders with high profile opportunities,
            in a hand-picked list of organizations.
          </p>
          <p>
            Name:
            <i> Lead-Radar</i>
            <br />
            Short description:
            <i> Design management and leadership jobs.</i>
            <br />
            Tagline:
            <i> Level up</i>
          </p>
          <p>
            Founders:
            <i> <a href="https://www.linkedin.com/in/dmitry-vladimirov-9069b9147/">Dmitry Vladimirov</a></i>
            <br />
            Date founded:
            <i> 30 July 2019</i>
            <br />
            Headquarters:
            <i> Perm, Russia</i>
            <br />
            Funding:
            <i> Self-funded</i>
          </p>
          <p>
            Website:
            <i> <a href="https://lead-radar.ru">https://lead-radar.ru</a></i>
            <br />
            Email:
            <i> <a href="mailto:mail@lead-radar.co">mail@lead-radar.co</a></i>
            <br />
            Facebook:
            <i> <a href="https://www.facebook.com/lead-radar/">https://www.facebook.com/lead-radar/</a></i>
            <br />
            VK:
            <i> <a href="https://www.vk.com/lead-radar/">https://www.vk.com/lead-radar/</a></i>
            <br />
            Twitter:
            <i> <a href="https://twitter.com/lead-radar/">https://twitter.com/lead-radar/</a></i>
            <br />
            LinkedIn:
            <i> <a href="https://www.linkedin.com/company/lead-radar/">https://www.linkedin.com/company/lead-radar/</a></i>
          </p>
          <h3>Press Kit</h3>
          <p>
            The most up-to-date company information,
            brand resources and product screenshots can be found here.
          </p>
          <Button
            link="#"
            size={3}
            classes={['btn-primary', 'lift', 'rounded-pill']}
          >
            Скачать Пресс-Кит
          </Button>
          <h3>Audience</h3>
          <h4>Designers</h4>
          <p>
            Our users are seasoned designers looking for opportunities in
            leadership and management roles,
            both in design and advertising agencies or studios,
            in-house teams of well known organizations, and tech companies, 
            from startups to FAANGs (Facebook, Amazon, Apple, Netflix and Google).
          </p>
          <h4>Partners</h4>
          <p>
            Our partners are organizations working in the advancement of design management
            and leadership as a discipline, conferences, executive education programs,
            software companies, media outlets and any kind of company trying to reach
            high profile designers in top companies.
          </p>
          <h3>Audience</h3>
          <p>Need anything else? Please email us at <a href="#">press@lead-radar.co</a>.</p>
        </div>
      </div>
    </main>
  );
};

export default Press;
