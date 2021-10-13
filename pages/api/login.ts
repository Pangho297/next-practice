import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  message: string;
}

const Login = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=3600;HttpOnly,Secure');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }
};

export default Login;
