import { Event } from '../types';
import { EVENTS } from '../data';

const getEvents = async (): Promise<Event[]> => {
  if (process.env.USE_API === 'true') {
    return fetch(`${process.env.API_URL}/api/events/?pagelimit=12`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(response => response.json());
  }
  return EVENTS;
};

export { getEvents };
