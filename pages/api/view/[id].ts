import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  id: string;
}

const dynamicId = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ id: `${req.query.id}` });
};

export default dynamicId;
/*
  다이나믹 API도 만들수 있다.
  페이지를 만들때와 같이 대괄호를 이용해 폴더를 만들면 된다.
*/
