import * as React from 'react';
import { Organization as OrganizationPage } from '../../ui/pages';
import { OrganizationDetailed, Error } from '../../types';
import { getOrganizationBySlug } from '../../services';

interface Props {
  response: OrganizationDetailed | Error;
}

const Page = ({ response }: Props) => <OrganizationPage response={response} />;

export const getServerSideProps = async ({ query }) => {
  const { slug } = query;
  const response = await getOrganizationBySlug(slug);
  return {
    props: {
      response
    }
  };
};

export default Page;
