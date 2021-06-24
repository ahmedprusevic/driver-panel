import axios, { AxiosResponse } from "axios";

class Api {
	api?: string;

	constructor() {
		this.api = process.env.API_LINK;
	}

	getDefaultHeaders = () => {
		return {
			"Content-Type": "application/json",
		};
	};

	login = async (formData: LoginFormData) => {
		const res: AxiosResponse = await axios.post(`${this.api}/auth/login`, {
			headers: this.getDefaultHeaders(),
			body: formData,
		});
		// console.log("resAPI", res);

		if (res.status === 200) return res.data;

		return Promise.reject(res);
	};
}

const api = new Api();
Object.freeze(api);

export default api;
