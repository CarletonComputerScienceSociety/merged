import React from 'react';
import Link from 'next/link';
import { Organization } from '../../../types';
import { OrganizationCard } from '../../shared';

interface Props {
  data: Organization[];
}

const Organizations = ({ data }: Props) => (
  <div className="home-page">
    <div className="page-wrap">
      <div className="organization-card-container">
        {data.map((organization, index) => (
          <Link
            key={index}
            href={{ pathname: `/organizations/${  organization.title}` }}
          >
            <a>
              <OrganizationCard
                title={organization.title}
                imgUrl={organization.imgUrl}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export { Organizations };
