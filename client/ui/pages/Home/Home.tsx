import React, { useState } from 'react';
import { Event } from '../../../types';
import { Button, EventCard } from '../../shared';
import { EventFilter } from './EventFilter';

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
      label: 'Hackathon'
    }
  ];

  const [selectedFilterOption, setSelectedFilterOption] = useState(0);

  return (
    <div className="home-page">
      {/* <HomeHeader /> */}
      <div className="page-wrap">
        <h1 id="events" className="home-h1">Upcoming Events</h1>
        <EventFilter
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={setSelectedFilterOption}
          filterOptions={filterOptions}
        />
        <div className="card-container">
          {data.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date="Sat, Aug 21, 2021 5:00 PM EDT"
              category={event.category}
              poster={event.poster}
            />
          ))}
        </div>
        <Button text="Show More" />
      </div>
    </div>
  );
};

export { Home };
