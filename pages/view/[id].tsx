import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Item from '../..//src/components/Item';
import { ItemType } from './type';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const [item, setItem] = useState<ItemType>({
    image_link: '',
    name: '',
    price: '',
    description: '',
  });

  const getData = async () => {
    const res = await axios.get(API_URL);
    try {
      console.log(res.data);
      setItem(res.data);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    if (id && Number(id) > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
