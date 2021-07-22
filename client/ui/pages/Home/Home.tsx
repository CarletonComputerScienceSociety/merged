import React from 'react'
import { Event } from '../../../types'
import { EventCard } from '../../shared'
import { HomeHeader } from './HomeHeader'

interface Props {
  data: Event[];
}

const Home = ({ data }: Props) => {
  return (
    <div className="home-page">
      <HomeHeader/>
      <div className="page-wrap">
        <div className="card-container">
          {
            data.map((event, index) => (
              <EventCard key={index} title={event.title} date="27 May 2021" body={event.body}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export { Home }
