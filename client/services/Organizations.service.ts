import { Organization, ResponseOrganizationDetailed } from '../types';
import { ORGANIZATIONS } from '../data';

const getOrganizations = async (): Promise<Organization[]> => {
  if (process.env.USE_API === 'true') {
    return fetch(`${process.env.API_URL}/api/organizations`, {
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
): Promise<ResponseOrganizationDetailed> => {
  if (process.env.USE_API === 'true') {
    // eslint-disable-next-line eqeqeq
    if (slug != undefined && slug != null) {
      return fetch(`${process.env.API_URL}/api/organizations/${slug}`)
        .then(response => response.json())
        .then(data => data);
    }
  }
  const mockOrganization = ORGANIZATIONS[0]; // ORGANIZATIONS.find(organization => organization.slug === slug)
  return {
    data: mockOrganization,
    errors: ''
  };
};

export { getOrganizations, getOrganizationBySlug };
