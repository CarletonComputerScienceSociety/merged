import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../Button';

describe('Button', () => {
  it('should render without throwing an error', () => {
    const wrap = mount(<Button text="Press Me" />);
    expect(wrap.find('button').text()).toBe('Press Me');
  });
});
