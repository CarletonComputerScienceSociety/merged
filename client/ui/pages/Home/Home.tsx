import React, { useState } from 'react';
import { Event } from '../../../types';
import { EventCard } from '../../shared';
import { EventFilter } from './EventFilter';
import { getEventsByCategory, getEventsThisWeek, getEventsToday } from '../../../services';
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
  const [today, setToday] = useState(defaultEvents);
  const [week, setWeek] = useState(defaultEvents);
  const [social, setSocial] = useState(defaultEvents);
  const [academic, setAcademic] = useState(defaultEvents);
  const [infoSession, setInfoSession] = useState(defaultEvents);

  const changeFilterOption = async (selectedIndex: number) => {
    if (selectedIndex === 1) {
      const todayEvents = await getEventsToday();
      setToday(todayEvents);
    } else if (selectedIndex === 2) {
      const weekEvents = await getEventsThisWeek();
      setWeek(weekEvents);
    } else if (selectedIndex === 3) {
      const socialEvents = await getEventsByCategory(filterOptions[selectedIndex].value);
      setSocial(socialEvents);
    } else if (selectedIndex === 4) {
      const academicEvents = await getEventsByCategory(filterOptions[selectedIndex].value);
      setAcademic(academicEvents);
    } else if (selectedIndex === 5) {
      const infoSessionEvents = await getEventsByCategory(filterOptions[selectedIndex].value);
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
              />
            ))}
          </>
          }
          {/* today events */}
          {selectedFilterOption === 1 &&
          <>
            {today.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
              />
            ))}
          </>
          }
          {/* week events */}
          {selectedFilterOption === 2 &&
          <>
            {week.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
              />
            ))}
          </>
          }
          {/* social events */}
          {selectedFilterOption === 3 &&
          <>
            {social.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
              />
            ))}
          </>
          }
          {/* academic events */}
          {selectedFilterOption === 4 &&
          <>
            {academic.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
              />
            ))}
          </>
          }
          {/* info session events */}
          {selectedFilterOption === 5 &&
          <>
            {infoSession.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={formatEventDate(event.startTime)}
                category="Event"
                poster={event.poster}
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
