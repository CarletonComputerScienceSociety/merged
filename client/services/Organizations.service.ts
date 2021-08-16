import { Organization, OrganizationDetailed, Error } from '../types';
import { ORGANIZATIONS } from '../data';

const getOrganizations = async (): Promise<Organization[]> => {
  if (process.env.USE_API === 'true') {
    return fetch(`${process.env.API_URL}/api/organizations/`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(response => response.json());
  }
  return ORGANIZATIONS;
};

const getOrganizationBySlug = async (
  slug: string
): Promise<OrganizationDetailed | Error | any> => {
  if (process.env.USE_API === 'true') {
    return fetch(`${process.env.API_URL}/api/organizations/${slug}`)
      .then(response => response.json())
      .then(data => data);
  }
  return ORGANIZATIONS.find(organization => organization.slug === slug);
};

export { getOrganizations, getOrganizationBySlug };
