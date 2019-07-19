import PropTypes from 'prop-types';
import React from 'react';


const User = (props) => {
  const { user } = props;
  return (
    <h6>
      {user.email}
    </h6>
  );
};

User.defaultProps = {
  user: null,
};

User.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.any,
};

export default User;
