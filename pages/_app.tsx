import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/auth.context";

function MyApp({ Component, pageProps }: AppProps) {
	let user: User | null;

	const sessionUser = sessionStorage.getItem("user");
	if (sessionUser) {
		user = JSON.parse(sessionUser);
	} else {
		user = null;
	}

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
