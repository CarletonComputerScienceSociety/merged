import React from 'react';

interface Props {
  title: string;
  description: string;
  profileUrl: string;
  backgroundUrl: string;
}

const OrganizationHeader = ({
  title,
  description,
  profileUrl,
  backgroundUrl
}: Props) => (
    <div className="organization-header">
      <div
        className="organization-header-background"
        style={{ backgroundImage: `url("${  backgroundUrl  }")` }}
       />
      <div className="organization-header-bar">
        <div className="organization-header-bar-content">
          <div
            className="organization-header-image"
            style={{ backgroundImage: `url("${  profileUrl  }")` }}
           />
          <div className="organization-header-content">
            <div className="organization-header-content-title">{title}</div>
            <div className="organization-header-content-description">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export { OrganizationHeader };
