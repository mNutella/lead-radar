/* eslint-disable jsx-a11y/accessible-emoji */
import * as JsSearch from 'js-search';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import Button from '../app/lead-radar/components/Button';
import HalfColor from '../app/lead-radar/components/HalfColor';
import Img from '../app/lead-radar/components/Img';
import { JobItem, JobsList } from '../app/lead-radar/components/JobsList';
import Search from '../app/lead-radar/components/Search';
import Spinner from '../app/lead-radar/components/Spinner';
import JOBS from '../app/lead-radar/gql/all_jobs.gql';
import { withSuspense } from '../utils';

const renderError = () => <div>ERROR</div>;

const renderList = jobs => (
  <div className="row jobs-list-container">
    <div className="col-12 p-3">
      <JobsList>
        {jobs
          && jobs.map(
            job => job && (
            <JobItem
              key={job.id.replace('-', '_')}
              title={job.role.name}
              company={job.company.name}
              link={job.linkToDesc}
              date={job.createdDate}
              city={job.location.alternateNames}
            />
            ),
          )}
      </JobsList>
    </div>
  </div>
);

const renderReceived = (data, error) => {
  if (error) return renderError();

  return renderList(data);
};

const useFilter = (query, data, sApi) => {
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    if (!query) {
      setFiltered(data);
    } else {
      const result = sApi.search(query);
      setFiltered(result);
    }
  }, [query]);

  return filtered;
};

const Jobs = ({ location }) => {
  const { state } = location;
  const initVal = state ? state.query : '';
  const { data, error } = useQuery(JOBS, { suspend: true });
  const { jobs } = data;

  const searchApi = new JsSearch.Search('id');
  searchApi.addIndex(['company', 'name']);
  searchApi.addIndex(['role', 'name']);
  searchApi.addIndex(['location', 'alternateNames']);
  searchApi.addDocuments(jobs);

  const [val, setVal] = useState(initVal);
  const filteredJobs = useFilter(val, jobs, searchApi);

  return (
    <main className="jobs-container">
      <HalfColor />
      <div className="container-fluid">
        <div className="container">
          <div className="row mx-lg-5 justify-content-center">
            <div className="col-sm-6 align-self-center jobs-col-left">
              <div className="row mb-3">
                <div className="col-sm-12 align-self-center text-md-left text-center">
                  <Img name="hr" />
                  <h1 className="mt-4 text-white font-weight-bold">
                    Достигните
                    {' '}
                    <span className="text-warning">сотен лидеров</span>
                    , ищущих их
                    следующую возможность.
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
            <div className="col-sm-6 jobs-col-right">
              <div className="header">
                <div className="form-group row mb-1 mt-2">
                  <div className="col-sm-12">
                    <Search
                      focus
                      defVal={initVal}
                      ph="Поиск по Городу, Позиции, Компании"
                      found={filteredJobs ? filteredJobs.length : 0}
                      onChange={e => setVal(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {!error ? (
                renderReceived(filteredJobs)
              ) : (
                <p className="text-muted text-center mt-4">
                  Something went wrong 🤷🏼‍ please refresh the page and try again 🤙🏼
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Jobs.defaultProps = {
  location: undefined,
};

Jobs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.any,
};

export default withSuspense(Jobs, <Spinner />);
