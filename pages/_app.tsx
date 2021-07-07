import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider, useAuth } from '../context/auth.context';
import { useEffect } from 'react';
import api from '../services/api';
import { Layout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  const { currentUser } = useAuth();

  // useEffect(() => {
  //   const token = sessionStorage.token;
  //   if (token) {
  //     api.setToken(token);
  //   }
  // }, []);

  return (
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
  );
}
export default MyApp;
