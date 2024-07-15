import { ObjectId } from "mongoose";

export interface ProductsType {
  _id?: ObjectId;
  product_name: String;
  product_image: string;
  price: number;
  category: string;
  free_shipping: boolean;
  rating: number;
  sold: number;
  date_in_stock: string;
}
