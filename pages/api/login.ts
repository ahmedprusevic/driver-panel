import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
    console.log("Uslo")
    console.log(req);
  res.status(200).json({ name: 'John Doe' })
}