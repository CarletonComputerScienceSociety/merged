import React from 'react';
import { EventCard } from '../../shared';
import { OrganizationHeader } from './OrganizationHeader';

interface Props {
  response: any
}

const OrganizationPage = ({ response }: Props) => (
  <div className="organization-page">
    {
    // fix this bad code
    // eslint-disable-next-line no-prototype-builtins
    !response.hasOwnProperty('message') ?
    <>
      <OrganizationHeader
        title={response.title}
        description={response.description}
        profileUrl="https://i.imgur.com/dhzJz7r.jpg"
        backgroundUrl="https://ccss.carleton.ca/images/slideshow/orientation.jpeg"
      />
      <div className="page-wrap">
        <div className="card-container">
          {response.newsItems.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date="Sat, Aug 21, 2021 5:00 PM EDT"
              category={event.category}
              poster={event.poster}
            />
          ))}
        </div>
      </div>
    </>
    :
    <div className="page-wrap">
      <h1>{response.message}</h1>
    </div>
    }
  </div>
);

export { OrganizationPage };
