import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';

import { Divider, Header, Loader } from 'semantic-ui-react';

import ItemList from '../src/components/ItemList';
import { ListResponse } from '../types/List';

const Home = ({ list }: ListResponse) => {
  return (
    <div>
      <Head>
        <title> HOME | Pangho </title>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.API_URL}`);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
};

/*
  export cosnt getStaticPath() {
    return {
      path: [
        { params: { id: "740" } },
        { params: { id: "730" } },
        { params: { id: "720" } },
      ],
      fallback: true
      // 이 옵션은 페이지가 많을때 유용하다 
      // 모든 아이템을 Pre-rendering을 하고 싶지만 그렇게하면 빌드타임이 늘어나기 때문이다
      // 이 옵션을 사용하면 최초 접속 유저는 빈 화면을 보겠지만
      // 이후 접속하는 유저들은 빈화면을 안봐도 된다
    }
  }
*/
