import React, { useState } from 'react';
import { Event } from '../../../types';
import { EventCard } from '../../shared';
import { EventFilter } from './EventFilter';
import { getEventsByCategory } from '../../../services';
import { formatEventDate } from '../../../utils';

interface Props {
  data: Event[];
}

const Home = ({ data }: Props) => {
  const filterOptions = [
    {
      value: 'events',
      label: 'Events'
    },
    {
      value: 'social',
      label: 'Social'
    },
    {
      value: 'academic',
      label: 'Academic'
    },
    {
      value: 'info-session',
      label: 'Info Session'
    }
  ];

  const [selectedFilterOption, setSelectedFilterOption] = useState(0);

  const defaultEvents: Event[] = [];
  const [social, setSocial] = useState(defaultEvents);
  const [academic, setAcademic] = useState(defaultEvents);
  const [infoSession, setInfoSession] = useState(defaultEvents);

  const changeFilterOption = async (selectedIndex: number) => {
    if (selectedIndex === 1) {
      const socialEvents = await getEventsByCategory('social');
      setSocial(socialEvents);
    } else if (selectedIndex === 2) {
      const academicEvents = await getEventsByCategory('academic');
      setAcademic(academicEvents);
    } else if (selectedIndex === 3) {
      const infoSessionEvents = await getEventsByCategory('info-session');
      setInfoSession(infoSessionEvents);
    }

    setSelectedFilterOption(selectedIndex);
  }

  return (
    <div className="home-page">
      {/* <HomeHeader /> */}
      <div className="page-wrap">
        <h1 id="events" className="home-h1">Upcoming Events</h1>
        <EventFilter
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={changeFilterOption}
          filterOptions={filterOptions}
        />
        <div className="card-container">
          {/* all events */}
          {selectedFilterOption === 0 &&
          <>
            {data.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
                url={event.externalLink}
              />
            ))}
          </>
          }
          {/* social events */}
          {selectedFilterOption === 1 &&
          <>
            {social.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
                url={event.externalLink}
              />
            ))}
          </>
          }
          {/* academic events */}
          {selectedFilterOption === 2 &&
          <>
            {academic.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
                url={event.externalLink}
              />
            ))}
          </>
          }
          {/* info session events */}
          {selectedFilterOption === 3 &&
          <>
            {infoSession.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
                url={event.externalLink}
              />
            ))}
          </>
          }
        </div>
        {/* <Button text="Show More" /> */}
      </div>
    </div>
  );
};

export { Home };
