import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'react-apollo';
import { getRandomID } from '../../../../utils';
import Users from '../../gql/users.gql';
import User from './User';


const withUsers = graphql(Users, {
  props: ({ data }) => ({ ...data }),
});

const UsersDisplay = ({ loading, users, error }) => {
  if (loading) return <div>Loading</div>;
  if (error) return <h1>ERROR</h1>;
  return (
    <div>
      {users && (
        users.map(
          user => user && (
            <User
              user={user}
              key={`${user.email.substr(0, user.email.indexOf('@'))}-${getRandomID()}`}
            />
          ),
        ))}
    </div>
  );
};

UsersDisplay.defaultProps = {
  loading: false,
  users: undefined,
  error: undefined,
};

UsersDisplay.propTypes = {
  loading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any,
};

export { withUsers };
export { UsersDisplay };
export default withUsers(UsersDisplay);
