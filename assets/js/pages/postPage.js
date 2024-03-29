import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../app/lead-radar/components/Button';
import Input from '../app/lead-radar/components/Input';
import Modal from '../app/lead-radar/components/Modal';
import CitySelector from '../app/lead-radar/components/CitySelector';
import { Plan, PricingTable } from '../app/lead-radar/components/PricingTable';
import RequestStatus from '../app/lead-radar/components/RequestStatus';
import POST_JOB from '../app/lead-radar/gql/post_job.gql';
import { CITIES, validEmailRegex, validUrlRegex } from '../constants';
import { useModal, useRecaptcha } from '../utils';

const useFormValidator = () => {
  const [errors, setErrors] = useState({
    company: '',
    role: '',
    location: '',
    link: '',
    email: '',
  });

  useEffect(() => {
    const tErrors = errors;

    // eslint-disable-next-line no-use-before-define
    Object.keys(tErrors).forEach(key => validateForm(key, tErrors[key]));
  }, []);

  const validateForm = (name, value) => {
    const tErrors = errors;

    switch (name) {
      case 'company':
        tErrors[name] = value.length > 0 ? '' : 'Пожалуйста заполните поле!';
        setErrors(tErrors);
        break;
      case 'role':
        tErrors[name] = value.length > 0 ? '' : 'Пожалуйста заполните поле!';
        setErrors(tErrors);
        break;
      case 'location':
        tErrors[name] = value ? '' : 'Пожалуйста заполните поле!';
        setErrors(tErrors);
        break;
      case 'link':
        tErrors[name] = validUrlRegex.test(value) ? '' : 'Неправильный URL!';
        setErrors(tErrors);
        break;
      case 'email':
        tErrors[name] = validEmailRegex.test(value) ? '' : 'Неправильный Email!';
        setErrors(tErrors);
        break;
      default:
        break;
    }
  };

  const isValid = () => {
    let valid = true;
    Object.values(errors).forEach((val) => {
      const flag = val.length > 0 && (valid = false);

      return flag;
    });
    return valid;
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    validateForm(name, value);
  };

  return {
    handleChange,
    errors,
    validateForm,
    isValid,
  };
};

const Post = () => {
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');
  const { isShow, handleToggleModal, handleCloseModal } = useModal();
  const {
    handleChange, validateForm, errors, isValid,
  } = useFormValidator();
  const reCaptcha = useRecaptcha();

  const [postJob, { loading, hasError }] = useMutation(POST_JOB, {
    variables: {
      role: position,
      location: location && location.value,
      link,
      company,
      contactEmail: email,
    },
  });

  const handleSubmit = () => {
    if (isValid() && reCaptcha.isVerified) {
      postJob();
      handleToggleModal();
      const timerId = setInterval(() => {
        if (!loading && !hasError) {
          handleCloseModal();
          clearInterval(timerId);
        } else if (hasError) {
          handleCloseModal();
          clearInterval(timerId);
        }
      }, 2500);
    }
  };

  const handleSelectedChange = (selected) => {
    setLocation(selected);
    validateForm('location', Boolean(selected));
  };

  return (
    <main className="post-container">
      <div className="container">
        <div className="header">
          <h1 className="display-4">Разместить вакансию</h1>
          <Modal show={isShow} handleClose={handleCloseModal}>
            <RequestStatus loading={loading} error={hasError}>
              <h1 className="text-center">
                {loading && !hasError && 'Ждемс'}
                {!loading && hasError && 'Что то пошло не так'}
                {!loading && !hasError && 'Успешно!'}
              </h1>
            </RequestStatus>
          </Modal>
          <h4>Достигните сотен лидеров, ищущих их следующую возможность.</h4>
        </div>
        <div className="content">
          <h3 className="font-weight-bold">Заполните форму</h3>
          <p>
            Спасибо за выбор Лид-Радар! Пожалуйста, обратите внимание, что должность должна занимать
            руководящую или управленческую роль (
            <i>директор, менеджер, руководитель, вице-президент и т. д.</i>
            ).
          </p>
          <form onChange={handleChange}>
            <div className="row">
              <div className="col-sm-8">
                <Input
                  name="company"
                  label="Компания"
                  ph="Yandex"
                  focus
                  classes={['bg-info']}
                  onChange={e => setCompany(e.target.value)}
                >
                  {errors.company.length > 0 && (
                    <span className="text-danger">{errors.company}</span>
                  )}
                </Input>
                <Input
                  name="role"
                  label="Должность"
                  ph="Руководитель отдела разработки Док-Станции"
                  classes={['bg-info']}
                  onChange={e => setPosition(e.target.value)}
                >
                  {errors.role.length > 0 && <span className="text-danger">{errors.role}</span>}
                </Input>
                <CitySelector
                  name="location"
                  label="Город"
                  placeholder="Ухта"
                  classes={['bg-info']}
                  searchable
                  options={CITIES}
                  onChange={handleSelectedChange}
                  value={location}
                >
                  {errors.location.length > 0 && (
                    <span className="text-danger">{errors.location}</span>
                  )}
                </CitySelector>
                <Input
                  name="link"
                  label="Ссылка"
                  ph="https://www.linkedin.com/jobs/view/1381919900/"
                  classes={['bg-info']}
                  onChange={e => setLink(e.target.value)}
                >
                  <small id="emailHelp" className="form-text text-muted">
                    Укажите ссылку с полным описанием должности.
                  </small>
                  {errors.link.length > 0 && <span className="text-danger">{errors.link}</span>}
                </Input>
                <Input
                  name="email"
                  label="Email"
                  ph="job@lead-radar.ru"
                  classes={['bg-info']}
                  onChange={e => setEmail(e.target.value)}
                >
                  <small id="emailHelp" className="form-text text-muted">
                    Ваша электронная почта не передается куда либо еще.
                  </small>
                  {errors.email.length > 0 && <span className="text-danger">{errors.email}</span>}
                </Input>
              </div>
            </div>
            <h5>Планы</h5>
            <PricingTable>
              <Plan title="Стандартный" price={0} />
            </PricingTable>
            <p className="mt-5">
              Ваша заявка будет рассмотрена в течение 24 часов. Мы вышлем вам инструкции по оплате,
              попросим указать информацию, указанную в счете, а также попросим вас подтвердить
              данные о вакансии. После подтверждения оплаты вакансия будет опубликована на срок в
              зависимости от выбраного плана. Если у вас есть какие-либо вопросы, не стесняйтесь
              обращаться к нам.
            </p>
            <ReCAPTCHA
              sitekey="6LcQTrQUAAAAAC51kTmXt8os3hRoP_jNgi48vPHZ"
              onChange={reCaptcha.handleChange}
            />
            <Button
              disabled={loading}
              def
              size={3}
              classes={['btn-primary', 'lift', 'rounded-pill', 'mb-4']}
              onClick={handleSubmit}
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
