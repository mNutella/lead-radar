import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../app/lead-radar/components/Button';
import HalfColor from '../app/lead-radar/components/HalfColor';
import Search from '../app/lead-radar/components/Search';
import Img from '../app/lead-radar/components/Img';

import './style.scss';


const Home = ({ history }) => {
  const [val, setVal] = useState('');

  const handleSearch = () => {
    history.push({ pathname: '/jobs', state: { query: val } });
  };

  return (
    <main className="home-container">
      <HalfColor invert />
      <div className="container-fluid">
        <div className="container">
          <div className="row mx-lg-5 justify-content-center align-items-center">
            <div className="col-sm-6">
              <div className="row">
                <div className="col">
                  <h1 className="mb-4 title text-uppercase font-weight-bold">
                    <span className="text-primary">500</span>
                    {' '}
                    ЛУЧШИХ КОМПАНИЙ ЖДУТ
                    {' '}
                    <span className="text-primary">ТЕБЯ</span>
                  </h1>
                  <form>
                    <div className="form-group row mb-4">
                      <div className="col-sm-11">
                        <Search
                          ph="Search by location, role or company"
                          onChange={e => setVal(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button
                      def
                      type="submit"
                      size={6}
                      classes={['btn-primary', 'lift', 'font-weight-bold', 'rounded-pill']}
                      onClick={() => handleSearch()}
                    >
                      Найти
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-6 home-col-right">
              <div className="row mb-3">
                <div className="col align-self-center text-md-left">
                  <Img name="wd" />
                  <h1 className="mt-4 text-white font-weight-bold">
                    Достигните
                    {' '}
                    <span className="text-warning">сотен лидеров</span>
                    , ищущих их следующую возможность.
                  </h1>
                </div>
              </div>
              <Button
                route
                link="/post"
                size={6}
                classes={['btn-light', 'lift', 'font-weight-bold', 'text-primary', 'rounded-pill']}
              >
                Разместить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Home.defaultProps = {
  history: undefined,
};

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.any,
};


export default Home;
