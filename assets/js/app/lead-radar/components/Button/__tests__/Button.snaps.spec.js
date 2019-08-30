import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  test('render button', () => {
    const wrapper = shallow((
      <Button />
    ));

    expect(wrapper).toMatchSnapshot();
  });

  test('markup button type "Link"', () => {
    const link = '/home';
    const wrapper = mount((
      <Button link={link} />
    ));
    const button = wrapper.find(Button);

    expect(button.prop('link')).toBe(link);
    expect(button.children()).toMatchSnapshot();
  });

  test('markup button type "Def"', () => {
    const wrapper = mount((
      <Button def />
    ));
    const button = wrapper.find(Button);

    expect(button.prop('def')).toBe(true);
    expect(button.children()).toMatchSnapshot();
  });

  test('add one class', () => {
    const classes = ['radius'];
    const wrapper = mount((
      <Button classes={classes} />
    ));
    const button = wrapper.find(Button);

    expect(button.prop('classes')).toBe(classes);
    expect(button.children()).toMatchSnapshot();
  });

  test('add some classes', () => {
    const classes = ['radius', 'border-pill'];
    const wrapper = mount((
      <Button classes={classes} />
    ));
    const button = wrapper.find(Button);

    expect(button.prop('classes')).toBe(classes);
    expect(button.children()).toMatchSnapshot();
  });
});
