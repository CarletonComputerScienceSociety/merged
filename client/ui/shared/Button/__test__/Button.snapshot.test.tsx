import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button text="Some Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
