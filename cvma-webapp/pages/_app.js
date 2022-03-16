import Layout from '../components/layout/layout';
import Head from 'next/head';
import '../styles/globals.css';

import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
   
    <Layout>
      <Head>
        <title>CVMA 18 - 2</title>
        <meta name="description" content="Combat Veterans Motorcycle Assocation 18 -2 out of Clarksville, Tennessee. We are a nonprofit group that is a 501c3 that raise money for local veterans charities."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </Layout>

    </Fragment>
  );
}

export default MyApp;
