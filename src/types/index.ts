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
  sale: boolean;
  date_in_stock: string;
}

export interface UsersType {
  user_name: string;
  email: string;
  user_password: string;
  mobile_no: number;
  country: string;
  state: string;
  city: string;
  address: string;
}
