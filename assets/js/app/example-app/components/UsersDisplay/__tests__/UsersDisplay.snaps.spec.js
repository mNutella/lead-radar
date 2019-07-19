/* eslint-disable camelcase */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import User from '../User';
import UsersDisplayMock, { UsersDisplay } from '../UsersDisplay';
import { empty, with_one_user } from '../__mocks__';

describe('<UsersDisplay />', () => {
  test('handles a loading state', () => {
    const wrapper = shallow((
      <UsersDisplay loading />
    ));

    expect(wrapper).toMatchSnapshot();
  });

  test('handles an error state', () => {
    const wrapper = shallow((
      <UsersDisplay error />
    ));

    expect(wrapper).toMatchSnapshot();
  });

  test('markup for empty users', () => {
    const wrapper = shallow((
      <MockedProvider mocks={empty}>
        <UsersDisplay />
      </MockedProvider>
    ));

    expect(wrapper.update().find(UsersDisplay).first().shallow()).toMatchSnapshot();
  });

  test('markup for one user', async () => {
    const wrapper = mount((
      <MockedProvider mocks={with_one_user}>
        <UsersDisplayMock />
      </MockedProvider>
    ));

    await wait(0);

    expect(wrapper.find(UsersDisplay).children()).toMatchSnapshot();
    expect(wrapper.update().find(User).length).toBe(1);
    expect(wrapper.update().find(User).children()).toMatchSnapshot();
  });
});
