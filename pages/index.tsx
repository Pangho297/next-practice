import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';

import { Divider, Header, Loader } from 'semantic-ui-react';

import ItemList from '../src/components/ItemList';
import { ListType } from '../types/List';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Home = () => {
  const [list, setList] = useState<ListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const res = await axios.get(API_URL);
      setList(res.data);
      setLoading(false);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title> HOME | Pangho </title>
      </Head>
      {loading && (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!loading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList data={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList data={list.slice(9)} />
        </>
      )}
    </div>
  );
};

export default Home;
