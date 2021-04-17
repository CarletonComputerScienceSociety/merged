import React from 'react'
import { mount } from 'enzyme'

import { Home } from '../Home'
import { exampleEvents } from '../../../../data'

describe('Home', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Home data={exampleEvents}/>)
    expect(wrap.find('h1').text()).toBe('Events:')
  })
})
