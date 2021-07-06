import React from "react";
import { AuthCookie, useAuth } from "../context/auth.context";
import Login from "../pages/login";
import { NextPage } from "next";

export function withAuth(Component: NextPage) {
	const Auth = (props: any) => {
		const { currentUser } = useAuth();

		if (!currentUser) {
			return <Login />;
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
