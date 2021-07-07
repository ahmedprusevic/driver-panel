import React, { useEffect } from 'react';
import { AuthCookie, useAuth } from '../context/auth.context';
import Login from '../pages/login';
import { NextPage } from 'next';
import api from '../services/api';
import axios from 'axios';
import Router from 'next/router';

export function withAuth(Component: NextPage) {
  const Auth = (props: any) => {
    const { currentUser, setCurrentUser } = useAuth();

    const fetchUser = async (token: string) => {
      api.setToken(token);
      try {
        const res = await axios.get(`http://localhost:3000/api/user`);
        console.log(res);
        if (res.data) {
          setCurrentUser(res.data.user);
        }
      } catch (err) {
        console.error(err);
      }
    };

    console.log(props);

    if (!currentUser && !props.token) {
      return <Login />;
    }

    if (props.token !== 'undefined' && !currentUser) {
      fetchUser(props.token);
    }

    return <Component {...props} />;
  };

  Auth.getInitialProps = async (ctx: any) => {
    const token = AuthCookie(ctx);

    const componentProps =
      Component.getInitialProps && (await Component.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  // if (Component.getInitialProps) {
  // 	Auth.getInitialProps = Component.getInitialProps;
  //   }

  return Auth;
}
