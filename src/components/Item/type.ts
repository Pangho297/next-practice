export interface ItemType {
  image_link: string;
  name: string;
  price: string;
  description: string;
  category: string;
  update_at: string;
  product_type: string;
  product_link: string;
}

export interface ItemProps {
  item: ItemType;
}
