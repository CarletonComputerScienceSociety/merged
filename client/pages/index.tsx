import * as React from 'react'

import { Home } from '../ui/pages'
import { getEvents } from '../data'
import { Event } from '../model'

interface Props {
  data: Event[];
}

const Page = ({ data }: Props) => {
  return <Home data={data}/>
}

export const getServerSideProps = async () => {
  const data = await getEvents()

  return {
    props: { data }
  }
}

export default Page
