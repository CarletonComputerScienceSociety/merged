import React from 'react'
import { Event } from '../../../model'

interface Props {
  data: Event[];
}

const Home = ({ data }: Props) => {
  return (
    <div>
      <h1>Events:</h1>
      <div className="events">
        {
          data.map(event => (
            <h2 key={event.id}>{event.id}. {event.title}</h2>
          ))
        }
      </div>
    </div>
  )
}

export { Home }
