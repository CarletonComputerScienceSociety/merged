import React from 'react'
import { Event } from '../../../model'
import { EventCard } from '../../components'

interface Props {
  data: Event[];
}

const Home = ({ data }: Props) => {
  return (
    <div>
      <h1>Events:</h1>
      <EventCard title = "Tech Talk" date = "27 May 2021" body = "Blockchain + Crypto Q&A Session"/>
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
