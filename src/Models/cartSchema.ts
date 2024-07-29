import { model, Schema } from "mongoose";
import Users from "./usersSchema";
import Products from "./productsSchema";

const CartSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
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
  quantity: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Cart = model("Cart", CartSchema);

export default Cart;
