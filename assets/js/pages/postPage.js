// import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';
import Button from '../app/lead-radar/components/Button';
import Input from '../app/lead-radar/components/Input';


const Post = () => {
  return (
    <main className="post-container">
      <div className="container">
        <div className="header">
          <h1 className="display-4">Post a Job</h1>
          <h4>
            Reach hundreds of design leaders looking for their next opportunity.
          </h4>
        </div>
        <div className="content">
          <h3>Create your listing</h3>
          <p>
            Thanks for considering Lead-Radar! We kindly ask that you write the job post in English.
            Please note that the job post should be for a leadership or
            management design role (e.g., director, manager, lead, head, principal, vp, etc.).
          </p>
          <form>
            <div className="row">
              <div className="col-sm-8">
                <Input
                  label="Компания"
                  ph="Yandex"
                  classes={['bg-info']}
                />
                <Input
                  label="Должность"
                  ph="Руководитель отдела разработки Док-Станции"
                  classes={['bg-info']}
                />
                <Input
                  label="Ссылка"
                  ph="https://www.linkedin.com/jobs/view/1381919900/"
                  classes={['bg-info']}
                >
                  <small id="emailHelp" className="form-text text-muted">Укажите ссылку с полным описанием должности.</small>
                </Input>
                <Input
                  label="Email"
                  ph="job@lead-radar.ru"
                  classes={['bg-info']}
                >
                  <small id="emailHelp" className="form-text text-muted">Ваша электронная почта не передается куда либо еще.</small>
                </Input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="shadow p-5 mb-5 mt-5 bg-white rounded">Standart</div>
              </div>
            </div>
            <p>
              Your submission will be reviewed within 24–48 hours.
              We&#39;ll email you the payment instructions, ask you for the information
              to include in the invoice, and also ask you to verify the job post details.
              After the payment is confirmed the job post will be published for 30 days.
              If you have any questions, don&#39;t hesitate to get in touch.
            </p>
            <Button
              link="#"
              size={3}
              classes={['btn-primary', 'lift', 'rounded-pill', 'mb-4']}
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Post;
