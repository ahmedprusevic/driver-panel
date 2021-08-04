import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../services/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user: User | null = await api.getUser(req.headers.authorization);
    if (user) {
      res.status(200).json(user);
      return;
    }
    res.status(500).end();
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};
