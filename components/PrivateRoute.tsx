import React from 'react';
import { AuthCookie, useAuth } from '../context/auth.context';
import { NextPage, NextPageContext } from 'next';
import api from '../services/api';
import Router from 'next/router';
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export function withAuth(Component: NextPage<any>) {
  const Auth = (props: any) => {
    const { currentUser, setCurrentUser } = useAuth();

    const fetchUser = async (token: string) => {
      api.setToken(token);
      try {
        const res: AxiosResponse<User> = await axios.get('/api/user');
        //@ts-ignore
        console.log('ress data', res.data);
        if (res.data) {
          setCurrentUser(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (!currentUser && !props.token) {
      Router.push('/login');
    }

    useEffect(() => {
      if (!currentUser && props.token) {
        fetchUser(props.token);
      }
    }, []);

    return <Component {...props} />;
  };

  Auth.getInitialProps = async (ctx: NextPageContext) => {
    const token = AuthCookie(ctx);

    const componentProps =
      Component.getInitialProps && (await Component.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Auth;
}
