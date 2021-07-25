import { Event } from '../types';
import { EVENTS } from '../data';

const getEvents = async (): Promise<Event[]> => {
  // eslint-disable-next-line no-constant-condition
  if (false) {
    // ADD ENV VAR TO TELL US TO USE THE REAL BACKEND OR NO
    return fetch('http://127.0.0.1:8000/api/v1/events/', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(response => response.json());
  } else {
    return EVENTS;
  }
};

export { getEvents };
