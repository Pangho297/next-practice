import Link from 'next/link';

import { Grid } from 'semantic-ui-react';
import { ListResponse } from '../../../types/List';
import * as S from './style';

const ItemList = ({ list }: ListResponse) => {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map(item => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a>
                  <S.Wrapper>
                    <S.Image src={item.image_link} alt={item.name} />
                    <S.ItemTitle>{item.name}</S.ItemTitle>
                    <S.Info>
                      {item.category} {item.product_type}
                    </S.Info>
                    <S.Price>${item.price}</S.Price>
                  </S.Wrapper>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
