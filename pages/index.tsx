import Head from "next/head";
import Image from "next/image";
import { withAuth } from "../components";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Testovi Panel</title>
				<meta
					name="description"
					content="Panel za uredjivanje mobilne aplikacije"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<form></form>
			</main>
			<p>AWAW</p>
			<footer className={styles.footer}></footer>
		</div>
	);
}

export default withAuth(Home);