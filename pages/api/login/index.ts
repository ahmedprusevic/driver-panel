import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../services/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = await api.login(req.body);
    const user: User | null = await api.getUser();
    if (user) {
      console.log('usr login', user);
      res.status(200).json({ user, token });
      return;
    }

    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};
