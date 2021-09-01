import React from 'react';
import { EventCard } from '../../shared';
import { OrganizationHeader } from './OrganizationHeader';
import { ResponseOrganizationDetailed } from '../../../types';

interface Props {
  response: ResponseOrganizationDetailed
}

const OrganizationPage = ({ response }: Props) => (

<div className="organization-page">
    {response.errors !== 'null' ?
    <>
      <OrganizationHeader
        title={response.data.title}
        description={response.data.description}
        profileUrl="https://i.imgur.com/dhzJz7r.jpg"
        backgroundUrl="https://ccss.carleton.ca/images/slideshow/orientation.jpeg"
      />
      <div className="page-wrap">
        <div className="card-container">
          {response.data.newsItems.map((event, index) => (
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
      <h1>{response.errors}</h1>
    </div>
    }
  </div>
);

export { OrganizationPage };
