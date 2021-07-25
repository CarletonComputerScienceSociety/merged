import * as React from 'react';

interface Props {
  title: string;
}

const Page = ({ title }: Props) => <>event: {title}</>;

export const getServerSideProps = async ({ query }) => {
  const { title } = query;

  return {
    props: {
      title,
    }
  };
};

export default Page;
