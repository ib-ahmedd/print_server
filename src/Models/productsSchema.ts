import { ProductsType } from "@src/types";
import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  product_name: {
    type: Schema.Types.String,
    required: true,
  },
  product_image: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  },
  free_shipping: {
    type: Schema.Types.Boolean,
    required: true,
    default: false,
  },
  rating: {
    type: Schema.Types.Number,
    required: true,
  },
  sold: {
    type: Schema.Types.Number,
    required: true,
  },
  sale: {
    type: Schema.Types.Boolean,
    required: true,
  },
  date_in_stock: {
    type: Schema.Types.String,
    required: true,
  },
});

const Products = model<ProductsType>("Products", ProductSchema);

export default Products;
