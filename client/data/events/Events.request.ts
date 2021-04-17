import { Event } from '../../model'

const getEvents = async (): Promise<Event[]> => {
  return fetch('http://127.0.0.1:8000/api/v1/events/', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then((response) => response.json())
}

export { getEvents }
