import { withStyles, TextField } from "@material-ui/core";

export const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "white",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "white",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "white",
			},
			"&:hover fieldset": {
				borderColor: "white",
			},
			"&.Mui-focused fieldset": {
				borderColor: "white",
			},
		},
	},
})(TextField);
