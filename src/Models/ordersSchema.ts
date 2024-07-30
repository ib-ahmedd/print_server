import { OrdersType } from "@src/types";
import { model, Schema } from "mongoose";

const OrdersSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
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
  date_ordered: {
    type: Schema.Types.String,
    required: true,
  },
  delivered: {
    type: Schema.Types.Boolean,
    required: true,
  },
  reviewed: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Orders = model<OrdersType>("Orders", OrdersSchema);

export default Orders;
