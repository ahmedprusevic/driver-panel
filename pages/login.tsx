import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { CssTextField } from "../components";
import axios, { AxiosResponse } from "axios";
import { useAuth } from "../context/auth.context";
import { useRouter } from "next/router";

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const { setCurrentUser } = useAuth();
	const classes = useStyles();
	const router = useRouter();

	const { email, password } = formData;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const res: AxiosResponse = await axios.post("/api/login", formData);
		sessionStorage.setItem("user", JSON.stringify(res.data.user));
		sessionStorage.setItem("token", res.data.token);
		setCurrentUser(res.data.user);
		router.push("/");
	};

	return (
		<div className={classes.root}>
			<main>
				<p className={classes.text}>Sign in to panel</p>
				<form className={classes.form} onSubmit={handleSubmit}>
					<CssTextField
						label="email"
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						className={classes.input}
						variant="outlined"
						InputProps={{
							className: classes.inputInner,
						}}
						InputLabelProps={{
							className: classes.inputInner,
						}}
					/>
					<CssTextField
						label="password"
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
						className={classes.input}
						variant="outlined"
						InputProps={{
							className: classes.inputInner,
						}}
						InputLabelProps={{
							className: classes.inputInner,
						}}
					/>
					<Button variant="contained" className={classes.signIn} type="submit">
						Sign in
					</Button>
				</form>
			</main>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			height: "100%",
			backgroundColor: "#141518",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		form: {
			display: "flex",
			flexDirection: "column",
			padding: theme.spacing(4),
			backgroundColor: "#2C2F34",
			borderRadius: "5px",
		},
		input: {
			backgroundColor: "#212121",
			width: "320px",
			borderRadius: "5px",
			marginTop: "10px",
			marginBottom: "10px",
		},
		inputInner: {
			color: "white",
		},
		signIn: {
			marginTop: "5px",
		},
		text: {
			color: "#f2f2f2",
			marginBottom: "5px",
			textShadow: "1px 1px 0 rgb(0 0 0 / 80%)",
			fontSize: "15px",
			textAlign: "center",
		},
		hr: {
			backgroudColor: "#fff",
			padding: "0px",
			border: "0px",
			height: "1px",
			backgroundImage: "linear-gradient(left, #f0f0f0, #8c8c8c, #f0f0f0)",
		},
	})
);
