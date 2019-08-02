import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../app/lead-radar/components/Button';
import HalfColor from '../app/lead-radar/components/HalfColor';
import Search from '../app/lead-radar/components/Search';

import './style.scss';


const Home = ({ history }) => {
  const [val, setVal] = useState('');

  const handleSearch = () => {
    history.push({ pathname: '/jobs', state: { query: val } });
  };

  return (
    <main className="home-container">
      <HalfColor invert />
      <div className="container-fluid h-100">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-content-center">
            <div className="col-sm-6 align-self-end">
              <h1 className="mb-4 display-4">FIND YOUR JOB</h1>
              <form>
                <div className="form-group row">
                  <div className="col-9">
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
                  Search
                </Button>
              </form>
            </div>
            <div className="col-sm-6">
              <img className="img-fluid mb-4" src="https://www.kraken.com/_assets/files/2019-04/Advanced4.png" alt="finder" />
              <Button
                route
                link="/post"
                size={6}
                classes={['btn-light', 'lift', 'font-weight-bold', 'text-primary', 'rounded-pill']}
              >
                Post Job
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
