import { Event } from '../types';
import { EVENTS } from '../data';

const getEvents = async (): Promise<Event[]> => {
  if (process.env.NEXT_PUBLIC_USE_API === 'true') {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events/?pagelimit=12`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    ).then(response => response.json());
  }
  return EVENTS;
};

const getEventsByCategory = async (category: string): Promise<Event[]> => {
  if (process.env.NEXT_PUBLIC_USE_API === 'true') {
    // eslint-disable-next-line eqeqeq
    if (category != undefined && category != null) {
      return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/?category=${category}&pagelimit=12`
      )
        .then(response => response.json())
        .then(data => data);
    }
  }
  return EVENTS;
};

const getEventsToday = async (): Promise<Event[]> => {
  if (process.env.NEXT_PUBLIC_USE_API === 'true') {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayFormatted = `${yyyy}-${mm}-${dd}`;

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const ddY = String(yesterday.getDate()).padStart(2, '0');
    const mmY = String(yesterday.getMonth() + 1).padStart(2, '0');
    const yyyyY = yesterday.getFullYear();
    const yesterdayFormatted = `${yyyyY}-${mmY}-${ddY}`;

    return fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events/?start_time=${yesterdayFormatted}&end_time=${todayFormatted}&pagelimit=12`
    )
      .then(response => response.json())
      .then(data => data);
  }
  return EVENTS;
};

const getEventsThisWeek = async (): Promise<Event[]> => {
  if (process.env.NEXT_PUBLIC_USE_API === 'true') {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const ddY = String(yesterday.getDate()).padStart(2, '0');
    const mmY = String(yesterday.getMonth() + 1).padStart(2, '0');
    const yyyyY = yesterday.getFullYear();
    const yesterdayFormatted = `${yyyyY}-${mmY}-${ddY}`;

    const week = new Date(today);
    week.setDate(today.getDate() + 7);
    const ddW = String(week.getDate()).padStart(2, '0');
    const mmW = String(week.getMonth() + 1).padStart(2, '0');
    const yyyyW = week.getFullYear();
    const weekFormatted = `${yyyyW}-${mmW}-${ddW}`;

    return fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events/?start_time=${yesterdayFormatted}&end_date=${weekFormatted}&pagelimit=12`
    )
      .then(response => response.json())
      .then(data => data);
  }
  return EVENTS;
};

export { getEvents, getEventsByCategory, getEventsToday, getEventsThisWeek };
