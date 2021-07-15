import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_LINK,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  setToken = (token: string) => {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  login = async (formData: LoginFormData) => {
    try {
      const res: AxiosResponse<string> = await this.api.post(
        '/auth/login',
        formData
      );

      this.setToken(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  getUser = async () => {
    try {
      const res: AxiosResponse<User> = await this.api.get('/auth/user');
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  getQuestions = async () => {
    try {
      const res: AxiosResponse<Question[]> = await this.api.get('/questions');
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };
}

const api = new Api();
Object.freeze(api);

export default api;
