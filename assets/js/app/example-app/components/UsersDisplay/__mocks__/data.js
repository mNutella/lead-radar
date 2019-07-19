/* eslint-disable camelcase */
import Users from '../../../gql/users.gql';


export const empty = null;

export const no_users = [
  {
    request: {
      query: Users,
      // variables: {
      //   name: 'Buck',
      // },
    },
    result: {
      data: {
        users: [],
      },
    },
  },
];

export const with_one_user = [
  {
    request: { query: Users },
    result: {
      data: {
        users: [
          {
            __typename: 'MyUser',
            email: 'admin@example.com',
          },
        ],
      },
    },
  },
];
