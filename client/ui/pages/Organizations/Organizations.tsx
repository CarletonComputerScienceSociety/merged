import React from 'react'
import { Organization } from '../../../types'
import { OrganizationCard } from '../../shared'

interface Props {
    data: Organization[];
}

const Organizations = ({ data }: Props) => {
  return (
    <div className="home-page">
      <div className="page-wrap">
        <div className="card-container">
            {
                data.map((organization, index) => (
                    <OrganizationCard key={index} title={organization.title} imgUrl={organization.imgUrl}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export { Organizations }
