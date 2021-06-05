import { createStyles, makeStyles, Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			height: "100%",
			backgroundColor: "#141518",
		},
		form: {
			display: "flex",
			flexDirection: "column",
			padding: theme.spacing(2),
			backgroundColor: "#2C2F34",
		},
	})
);

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const classes = useStyles();

	const { email, password } = formData;

	return (
		<div className={classes.root}>
			<main>
				<form className={classes.form}>
					<TextField label="email" type="email" name="email" value={email} />
					<TextField
						label="password"
						type="password"
						name="password"
						value={password}
					/>
				</form>
			</main>

			<footer> Footer </footer>
		</div>
	);
}
