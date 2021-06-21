import React from "react";
import { useAuth } from "../context/auth.context";
import Login from "../pages/login";
import { NextPage } from 'next'


export function withAuth(Component: NextPage){
	const Auth = (props: any) => {
		const { currentUser } = useAuth();

		if (!currentUser) {
			return <Login />;
		}

		return <Component {...props} />;
	};

	if (Component.getInitialProps) {
		Auth.getInitialProps = Component.getInitialProps;
	  }

	  return Auth;
};
