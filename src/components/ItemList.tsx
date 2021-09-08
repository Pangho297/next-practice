import { Grid } from "semantic-ui-react";
import { ListResponse, ListType } from "../../types/List";

const ItemList = ({ data }: ListResponse) => {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {data.map((item) => (
            <Grid.Column>
              <img src={item.image_link} alt={item.name} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
