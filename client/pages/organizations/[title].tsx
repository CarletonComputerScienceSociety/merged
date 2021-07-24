import * as React from 'react'
import { Organization as OrganizationPage } from '../../ui/pages'
import { Organization } from '../../types'
import { getOrganizationByTitle } from '../../services'

interface Props {
  data: Organization
}

const Page = ({ data }: Props) => {
  return <OrganizationPage data={data}/>
}

export const getServerSideProps = async ({ query }) => {
  const { title } = query
  const data = await getOrganizationByTitle(title)

  return {
    props: {
      data: data
    }
  }
}

export default Page
