import * as React from 'react'
import { Organization as OrganizationPage } from '../../ui/pages'
import { Organization, Event } from '../../types'
import { getEvents, getOrganizationByTitle } from '../../services'

interface Props {
  organization: Organization,
  events: Event[]
}

const Page = ({ organization, events }: Props) => {
  return <OrganizationPage organization={organization} events={events}/>
}

export const getServerSideProps = async ({ query }) => {
  const { title } = query
  const organization = await getOrganizationByTitle(title)
  const events = await getEvents()

  return {
    props: {
      organization: organization,
      events: events
    }
  }
}

export default Page
