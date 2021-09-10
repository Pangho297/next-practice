import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import Item from '../..//src/components/Item';
import { ItemProps } from './type';

const Post = ({ item, name }: ItemProps) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {item && <Item item={item} />}
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context?.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
};

/*

Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)

1. 정적 생성
2. Sever Side Rendering(SSR, Dynamic Rendering)

차이점은 언제 HTML 파일을 생성하는가

[정적 생성]
- 프로젝트가 빌드하는 시점에 HTML파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, Next js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths
- 유저가 요청하기 전에 페이지를 만들어놔도 상관 없으면 정적 생성 사용
- 마케팅 페이지, 블로그 게시물, 도움말 페이지 등

[서버사이드 렌더링]은 매 요청마다 HTML을 생성
- 항상 최신 상태 유지
- getServerSideProps

*/
