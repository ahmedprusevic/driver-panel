import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider, useAuth } from '../context/auth.context';
import { Layout } from '../components';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const { currentUser } = useAuth();

  return (
    <>
      <Head>
        <title>Testovi Panel</title>
        <meta
          name="description"
          content="Panel za uredjivanje mobilne aplikacije"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider user={currentUser}>
        <Layout>
          <Component {...pageProps} />
          <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
              height: 100%;
            }
          `}</style>
        </Layout>
      </AuthProvider>
    </>
  );
}
export default MyApp;
