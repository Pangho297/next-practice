// Header라는 이름이 Semantic UI에서 사용되어 이름을 Top이라고 지음
import { Header } from "semantic-ui-react";

import Gnb from "./Gnb";

const Top = () => {
  return (
    <div>
      <img src="/images/logo.png" alt="" style={{ width: 250 }} />
      <Header as="h1">Pangho</Header>
      <Gnb></Gnb>
    </div>
  );
};

export default Top;
