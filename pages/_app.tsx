import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import type { AppProps } from "next/app";

import Top from "../src/components/Top";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default MyApp;

// 페이지 전환 시 레이아웃을 유지할 수 있음
// 페이지 전환 시 상태값을 유지할 수 있음
// componentDidCatch를 이용해 커스텀 에러 핸들링 가능
// 추가적인 데이터를 페이지로 주입시켜줄수 있음
// 글로벌 CSS는 이곳에 선언

// public 폴더에는 HTML 파일등을 넣어 사용 가능함
// public 폴더의 이름을 변경해서는 안됨
// 만약 Pages 폴더 내에 같은 이름의 파일이 존재하면 에러가 발생함
