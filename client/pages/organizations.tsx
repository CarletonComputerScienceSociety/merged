import * as React from 'react'
import { Organizations } from '../ui/pages'
import { Organization } from '../types'
import { getOrganizations } from '../services'

interface Props {
  data: Organization[];
}

const Page = ({ data }: Props) => {
  return <Organizations data={data}/>
}

export const getServerSideProps = async () => {
  const data = await getOrganizations()

  return {
    props: { data }
  }
}

export default Page
