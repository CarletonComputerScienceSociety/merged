import { storiesOf } from '@storybook/react'

import { Home } from './Home'
import { exampleEvents } from '../../../data'

storiesOf('Home', module).add('Page', () => {
  return <Home data={exampleEvents}/>
})
