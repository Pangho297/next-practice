// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string | null;
}

const isLogin = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
};

export default isLogin;
/*
  API도 만들수 있다.
*/
