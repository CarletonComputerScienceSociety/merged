import React from 'react'
import { Organization } from '../../../types'
import { OrganizationCard } from '../../shared'
import Link from 'next/link'

interface Props {
    data: Organization[];
}

const Organizations = ({ data }: Props) => {
  return (
    <div className="home-page">
      <div className="page-wrap">
        <div className="organization-card-container">
            {
                data.map((organization, index) => (
                    <Link key={index} href={{ pathname: '/organizations/' + organization.title }}>
                        <a>
                            <OrganizationCard title={organization.title} imgUrl={organization.imgUrl}/>
                        </a>
                    </Link>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export { Organizations }
