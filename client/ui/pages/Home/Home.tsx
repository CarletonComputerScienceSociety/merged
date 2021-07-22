import React from 'react'
import { Event } from '../../../types'
import { EventCard } from '../../shared'

interface Props {
  data: Event[];
}

const Home = ({ data }: Props) => {
  return (
    <div className="page home-page">
      <h1>Events:</h1>
      <div className="card-container">
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
