import { Review } from "@src/types";
import { Schema, model } from "mongoose";

const ReviewsSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  rating: {
    type: Schema.Types.Number,
    required: true,
  },
  review_title: {
    type: Schema.Types.String,
    maxLength: 20,
  },
  review: {
    type: Schema.Types.String,
    maxLength: 50,
  },
});

const Reviews = model<Review>("Reviews", ReviewsSchema);

export default Reviews;
