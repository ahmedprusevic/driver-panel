import React from 'react';
import { useState, useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';

const AuthContext = React.createContext<UserContext>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const AuthProvider = ({ user, children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const sessionUser = sessionStorage.getItem('user');
  //   if (sessionUser) {
  //     setCurrentUser(JSON.parse(sessionUser));
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export const AuthCookie = (ctx: any) => {
  const { token } = nextCookie(ctx);

  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { location: '/login' });
      ctx.res.end();
    } else {
      Router.push('/login');
    }
  }

  return token;
};
