import Head from 'next/head';
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
    </>
  );
}

export default MyApp;
