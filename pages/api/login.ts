import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../services/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const token = await api.login(req.body);
		const user: User | undefined = await api.getUser();
		if (user) {
			res.status(200).json({ user, token });
		}
	} catch (err) {
		console.error(err);
		res.status(500);
	}
};
