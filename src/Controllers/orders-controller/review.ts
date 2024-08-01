import Orders from "@src/Models/ordersSchema";
import Reviews from "@src/Models/reviewsSchema";
import { Request, Response } from "express";

async function review(req: Request, res: Response) {
  try {
    const { order_id, product_id, user_id, rating, review_title, review } =
      req.body;
    await Reviews.create({ user_id, product_id, rating, review_title, review });
    await Orders.updateOne({ _id: order_id }, { reviewed: true });
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default review;
