import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider, useAuth } from "../context/auth.context";
import { useEffect } from "react";
import api from "../services/api";

function MyApp({ Component, pageProps }: AppProps) {
	const { currentUser } = useAuth();

	useEffect(() => {
		const token = sessionStorage.token;
		if (token) {
			api.setToken(token);
		}
	}, []);

	return (
		<AuthProvider user={currentUser}>
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
		</AuthProvider>
	);
}
export default MyApp;
