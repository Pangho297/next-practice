export interface ListType {
  id: number;
  image_link: string;
  name: string;
  price: string;
  category: string;
  product_type: string;
}

export interface ListResponse {
  data: ListType[];
}
