import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import api from "../../services/api";

type Data = {
	name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	// console.log("Uslo");
	// console.log(req);
	// console.log(req.body);
	const response = await axios.post(
		"http://localhost:8080/auth/login",
		req.body,
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	console.log(response);
	// res.status(200).json({ name: "John Doe" });
};
