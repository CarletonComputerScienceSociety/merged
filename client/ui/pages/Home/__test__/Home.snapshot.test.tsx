import React from 'react'
import renderer from 'react-test-renderer'

import { Home } from '../Home'
import { exampleEvents } from '../../../../data'

it('renders correctly', () => {
  const tree = renderer.create(<Home data={exampleEvents}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
