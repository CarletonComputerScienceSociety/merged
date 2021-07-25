import { Organization } from '../types';
import { ORGANIZATIONS } from '../data';

const getOrganizations = async (): Promise<Organization[]> => {
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
    return ORGANIZATIONS;
  }
};

const getOrganizationByTitle = async (title: string): Promise<any> => {
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
    return ORGANIZATIONS.find(Organization => Organization.title === title);
  }
};

export { getOrganizations, getOrganizationByTitle };
