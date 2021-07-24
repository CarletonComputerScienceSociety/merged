import React from 'react'
import { Organization } from '../../../types'

interface Props {
    data: Organization;
}

const OrganizationPage = ({ data }: Props) => {
  return (
    <div className="home-page">
      <div className="page-wrap">
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export { OrganizationPage }
