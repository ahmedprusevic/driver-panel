import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/auth.context";
import { useState } from "react";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const sessionUser = sessionStorage.getItem("user");
		if (sessionUser) {
			setUser(JSON.parse(sessionUser));
		}
	}, [])
	

	return (
		<AuthProvider user={user}>
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
