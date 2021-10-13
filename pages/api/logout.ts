import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  message: string;
}

const Logout = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0;HttpOnly,Secure');
  res.statusCode = 200;
  res.json({ message: 'ok' });
};

export default Logout;
