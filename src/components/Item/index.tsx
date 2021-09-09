import { Button, Header } from 'semantic-ui-react';

import * as S from './style';
import { ItemProps } from './type';

const Item = ({ item }: ItemProps) => {
  const { image_link, name, price, description, category, product_type } = item;
  return (
    <>
      <S.Warpper>
        <S.ImageBox>
          <S.Image src={image_link} alt={name} />
        </S.ImageBox>
        <S.Info>
          <S.Title>{name}</S.Title>
          <S.Price>${price}</S.Price>
          <S.Category>
            {category && `${category}/`}
            {product_type}
          </S.Category>
          <Button color="yellow">구매하기</Button>
        </S.Info>
      </S.Warpper>
      <Header as="h3">Description</Header>
      <S.Description>{description}</S.Description>
    </>
  );
};

export default Item;
