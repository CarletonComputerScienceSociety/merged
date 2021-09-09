import Head from 'next/head';
import React from 'react';
import '../styles/global.scss';
import { Navbar, Footer } from '../ui/shared';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Carleton Merged</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <noscript>
        <img
          src="https://shynet.carletoncomputersciencesociety.ca/ingress/917dcbec-c373-4142-b34d-063ed29095e6/pixel.gif"
          alt="shynet"
        />
      </noscript>
      <script
        defer
        src="https://shynet.carletoncomputersciencesociety.ca/ingress/917dcbec-c373-4142-b34d-063ed29095e6/script.js"
      />
    </>
  );
}

export default MyApp;
