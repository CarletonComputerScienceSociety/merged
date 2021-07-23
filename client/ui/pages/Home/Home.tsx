import React, { useState } from 'react'
import { Event } from '../../../types'
import { EventCard } from '../../shared'
import { HomeHeader } from './HomeHeader'
import { EventFilter } from './EventFilter'

interface Props {
  data: Event[];
}

const Home = ({ data }: Props) => {
  const filterOptions = [
    {
      value: 'featured',
      label: 'Featured'
    },
    {
      value: 'all',
      label: 'All'
    },
    {
      value: 'today',
      label: 'Today'
    },
    {
      value: 'this week',
      label: 'This Week'
    },
    {
      value: 'social',
      label: 'Social'
    },
    {
      value: 'workshop',
      label: 'Workshop'
    },
    {
      value: 'hackathon',
      label: 'Hacktathon'
    }
  ]

  const [selectedFilterOption, setSelectedFilterOption] = useState(0)

  return (
    <div className="home-page">
      <HomeHeader/>
      <div className="page-wrap">
      <h1 id="events">Upcoming Events</h1>
      <EventFilter selectedFilterOption={selectedFilterOption} setSelectedFilterOption={setSelectedFilterOption} filterOptions={filterOptions}/>
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
