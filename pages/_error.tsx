import { NextPageContext } from 'next';

interface StatusCode {
  statusCode: number;
}

const Error = ({ statusCode }: StatusCode) => {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

// 404 에러의 경우 static page로 남겨두는 것이 좋다 (퍼포먼스때문에)
