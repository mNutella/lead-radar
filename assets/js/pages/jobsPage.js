import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { graphql } from 'react-apollo';
import Button from '../app/lead-radar/components/Button';
import HalfColor from '../app/lead-radar/components/HalfColor';
import { JobItem, JobsList } from '../app/lead-radar/components/JobsList';
import Search from '../app/lead-radar/components/Search';
import JobsQuery from '../app/lead-radar/gql/all_jobs.gql';


const withJobs = graphql(JobsQuery, {
  props: ({ data, query }) => ({ ...data, query }),
});

const renderLoading = () => <div>Loading</div>;

const renderError = () => <div>ERROR</div>;

const renderList = jobs => (
  <div className="row jobs-list-container">
    <div className="col-12 p-3">
      <JobsList>
        {jobs && (
          jobs.map(
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
          ))}
      </JobsList>
    </div>
  </div>
);

const renderReceived = (data, loading, error) => {
  if (loading) return renderLoading();
  if (error) return renderError();

  return renderList(data);
};

const useFilter = (query, jobs, loading, error) => {
  const words = query.split(' ');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query !== ' ' && !loading && !error) {
      const tempList = [];

      jobs.forEach((job) => {
        const lcQuery = query.toLowerCase();
        const role = job.role.name.toLowerCase();
        const company = job.company.name.toLowerCase();
        const city = job.location.alternateNames.toLowerCase();
        const region = job.location.region.alternateNames.toLowerCase();

        if (role === lcQuery || company === lcQuery || city === lcQuery || region === lcQuery) {
          tempList.push(job);
        }
      });

      if (tempList.length !== 0) {
        setResult(tempList);
        return;
      }

      jobs.forEach((job) => {
        const role = job.role.name.toLowerCase();
        const company = job.company.name.toLowerCase();
        const city = job.location.alternateNames.toLowerCase();
        const region = job.location.region.alternateNames.toLowerCase();
        const dups = [];

        words.forEach((word) => {
          const lcWord = word.toLowerCase();

          if (!dups.includes(job.id) && (role.includes(lcWord)
            || company.includes(lcWord)
            || city.includes(lcWord)
            || region.includes(lcWord))) {
            tempList.push(job);
            dups.push(job.id);
          }
        });
      });

      setResult(tempList);
    } else setResult(jobs);
  }, [query, jobs]);

  return { jobs: result };
};

const Jobs = ({
  loading, jobs, error, query,
}) => {
  const [val, setVal] = useState(query);
  const filter = useFilter(val, jobs, loading, error);

  return (
    <main className="jobs-container">
      <HalfColor />
      <div className="container-fluid h-100">
        <div className="container h-100">
          <div className="row h-100 mx-lg-5 justify-content-center">
            <div className="col-sm-6 align-self-center">
              <div className="row mb-3">
                <div className="col-sm-12 align-self-center text-md-left text-center">
                  <div className="jobs-img" />
                  <h4 className="mt-4 text-white">
                    Reach hundreds of design leaders looking for their next opportunity.
                  </h4>
                </div>
              </div>
              <Button
                route
                link="/post"
                size={6}
                classes={['btn-light', 'lift', 'font-weight-bold', 'text-primary', 'rounded-pill']}
              >
                Post Job
              </Button>
            </div>
            <div className="col-sm-6">
              <div className="header">
                <div className="form-group row mb-1 mt-2">
                  <div className="col-sm-12">
                    <Search
                      defVal={query}
                      ph="Search by location, role or company"
                      found={filter.jobs ? filter.jobs.length : 0}
                      onChange={e => setVal(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {renderReceived(filter.jobs, loading, error)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Jobs.defaultProps = {
  query: '',
  loading: false,
  jobs: undefined,
  error: false,
};

Jobs.propTypes = {
  query: PropTypes.string,
  loading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  jobs: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any,
};

export default withJobs(Jobs);
