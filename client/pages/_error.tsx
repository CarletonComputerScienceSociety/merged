import React from 'react';

import Error from 'next/error';

function Page({ statusCode }: any) {
    return <Error statusCode={statusCode} />;
}

Page.getInitialProps = () => {
    const statusCode = 404
    return { statusCode }
}
export default Page;