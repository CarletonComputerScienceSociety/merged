import * as React from 'react';

interface Props {
  title: string;
  data: any[];
}

const Page = ({ title }: Props) => {
  return <>event: {title}</>;
};

export const getServerSideProps = async ({ query }) => {
  const { title } = query;
  const data = [];

  return {
    props: {
      title: title,
      data: data
    }
  };
};

export default Page;
