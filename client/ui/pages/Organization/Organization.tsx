import React from 'react';
import { Event, Organization } from '../../../types';
import { EventCard } from '../../shared';
import { OrganizationHeader } from './OrganizationHeader';

interface Props {
  organization: Organization;
  events: Event[];
}

const OrganizationPage = ({ organization, events }: Props) => {
  return (
    <div className="organization-page">
      <OrganizationHeader
        title={organization.title}
        description={organization.description}
        profileUrl={organization.imgUrl}
        backgroundUrl={organization.backgroundUrl}
      />
      <div className="page-wrap">
        <div className="card-container">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date="Sat, Aug 21, 2021 5:00 PM EDT"
              category={event.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { OrganizationPage };
