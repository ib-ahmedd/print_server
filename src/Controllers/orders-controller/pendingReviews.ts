import Orders from "../../Models/ordersSchema";
import { Request, Response } from "express";

async function pendingReviews(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await Orders.find({
      user_id: id,
      delivered: true,
      reviewed: false,
    });
    res.json(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default pendingReviews;
