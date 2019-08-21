import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-apollo-hooks';
import Button from '../app/lead-radar/components/Button';
import Input from '../app/lead-radar/components/Input';
import POST_JOB from '../app/lead-radar/gql/post_job.gql';
import { PricingTable, Plan } from '../app/lead-radar/components/PricingTable';
import RequestStatus from '../app/lead-radar/components/RequestStatus';
import Modal from '../app/lead-radar/components/Modal';


const useModal = () => {
  const [show, setShow] = useState(false);

  const handleToggleModal = () => {
    setShow(!show);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return { handleToggleModal, handleCloseModal, isShow: show };
};

const useFormValidator = () => {
  const [errors, setErrors] = useState({
    company: '', role: '', location: '', link: '', email: '',
  });
  const validUrlRegex = RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
  const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  useEffect(() => {
    const tErrors = errors;

    // eslint-disable-next-line no-use-before-define
    Object.keys(tErrors).forEach((key => validateForm(key, tErrors[key])));
  }, []);

  const validateForm = (name, value) => {
    const tErrors = errors;

    switch (name) {
      case 'company':
        tErrors[name] = value.length > 0
          ? ''
          : 'Пожалуйста заполните поле!';
        setErrors(tErrors);
        break;
      case 'role':
        tErrors[name] = value.length > 0
          ? ''
          : 'Пожалуйста заполните поле!';
        setErrors(tErrors);
        break;
      case 'location':
        tErrors[name] = value.length > 0
          ? ''
          : 'Пожалуйста заполните поле!';
        setErrors(tErrors);
        break;
      case 'link':
        tErrors[name] = validUrlRegex.test(value)
          ? ''
          : 'Неправильный URL!';
        setErrors(tErrors);
        break;
      case 'email':
        tErrors[name] = validEmailRegex.test(value)
          ? ''
          : 'Неправильный Email!';
        setErrors(tErrors);
        break;
      default:
        break;
    }
  };

  const isValid = () => {
    let valid = true;
    Object.values(errors).forEach(
      val => val.length > 0 && (valid = false)
    );
    return valid;
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    validateForm(name, value);
  };

  return {
    handleChange, errors, isValid,
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
    handleChange, errors, isValid,
  } = useFormValidator();

  const [postJob, { loading, hasError }] = useMutation(POST_JOB, {
    variables: {
      role: position,
      location,
      link,
      company,
      contactEmail: email,
    },
  });

  const handleSubmit = () => {
    if (isValid()) {
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
          <h4>
            Достигните сотен лидеров, ищущих их следующую возможность.
          </h4>
        </div>
        <div className="content">
          <h3 className="font-weight-bold">Заполните форму</h3>
          <p>
            Спасибо за выбор Lead-Radar!
            Пожалуйста, обратите внимание, что должность должна занимать руководящую или
            {' '}
            управленческую роль (
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
                  {errors.company.length > 0 && (<span className="text-danger">{errors.company}</span>)}
                </Input>
                <Input
                  name="role"
                  label="Должность"
                  ph="Руководитель отдела разработки Док-Станции"
                  classes={['bg-info']}
                  onChange={e => setPosition(e.target.value)}
                >
                  {errors.role.length > 0 && (<span className="text-danger">{errors.role}</span>)}
                </Input>
                <Input
                  name="location"
                  label="Город"
                  ph="Ухта"
                  classes={['bg-info']}
                  onChange={e => setLocation(e.target.value)}
                >
                  {errors.location.length > 0 && (<span className="text-danger">{errors.location}</span>)}
                </Input>
                <Input
                  name="link"
                  label="Ссылка"
                  ph="https://www.linkedin.com/jobs/view/1381919900/"
                  classes={['bg-info']}
                  onChange={e => setLink(e.target.value)}
                >
                  <small id="emailHelp" className="form-text text-muted">Укажите ссылку с полным описанием должности.</small>
                  {errors.link.length > 0 && (<span className="text-danger">{errors.link}</span>)}
                </Input>
                <Input
                  name="email"
                  label="Email"
                  ph="job@lead-radar.ru"
                  classes={['bg-info']}
                  onChange={e => setEmail(e.target.value)}
                >
                  <small id="emailHelp" className="form-text text-muted">Ваша электронная почта не передается куда либо еще.</small>
                  {errors.email.length > 0 && (<span className="text-danger">{errors.email}</span>)}
                </Input>
              </div>
            </div>
            <h5>Планы</h5>
            <PricingTable>
              <Plan title="Стандартный" price={0} />
            </PricingTable>
            <p className="mt-5">
              Ваша заявка будет рассмотрена в течение 24 часов.
              {' '}
              Мы вышлем вам инструкции по оплате, попросим указать информацию,
              указанную в счете, а также попросим вас подтвердить данные о вакансии.
              После подтверждения оплаты вакансия будет опубликована на срок в зависимости от выбраного плана.
              Если у вас есть какие-либо вопросы, не стесняйтесь обращаться к нам.
            </p>
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
