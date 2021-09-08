export interface ListType {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: null;
  currency: null;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number;
  category: null;
  product_type: string;
  tag_list: Length[];
  created_at: Date;
  updated_at: Date;
  product_api_url: string;
  api_featured_image: string;
  product_colors: Length[];
}

export interface ListResponse {
  data: ListType[];
}

interface Length {
  length: number;
}
