import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title> HOME | Pangho </title>
      </Head>
      creat-next-app !!!create-next-app으로 설치하면
      <br />
      1. 컴파일과 번들링이 자동으로 된다 (webpack과 babel)
      <br />
      2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다.
      <br />
      3. 서버 사이드 렌더링이 지원된다.
      <br />
      4. 스테틱 파일을 지원한다.
    </div>
  );
};

export default Home;
