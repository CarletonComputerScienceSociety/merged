import React from 'react'
import { Event } from '../../../model'
import { EventCard } from '../../shared'

interface Props {
  data: Event[];
}

const Home = ({ data }: Props) => {
  return (
    <div>
      <h1>Events:</h1>
      <div className="events">
        {
          data.map((event, index) => (
            <EventCard key={index} title={event.title} date="27 May 2021" body={event.body}/>
          ))
        }
      </div>
    </div>
  )
}

export { Home }
