import { Button, Header } from 'semantic-ui-react';

import { ItemProps } from './type';

const Item = ({ item }: ItemProps) => {
  const { image_link, name, price, description } = item;
  return (
    <>
      <div>
        <img src={image_link} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <strong>${price}</strong>
      </div>
      <Button color="yellow">구매하기</Button>
      <div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Item;
