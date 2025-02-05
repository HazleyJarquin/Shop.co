export interface IProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock_quantity: number;
  created_at: Date;
  updated_at: Date;
  discount: number;
}
