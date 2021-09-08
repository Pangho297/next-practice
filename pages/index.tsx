import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";

import ItemList from "../src/components/ItemList";
import { ListResponse, ListType } from "../types/List";

const API_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

const Home = () => {
  const [list, setList] = useState<ListType[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get<ListResponse>(API_URL);
      console.log(res.data);
      setList(res.data);
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
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList data={list} />
    </div>
  );
};

export default Home;
