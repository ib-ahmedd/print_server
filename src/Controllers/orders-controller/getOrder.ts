import Orders from "@src/Models/ordersSchema";
import { Request, Response } from "express";

async function addOrder(req: Request, res: Response) {
  try {
    const user_id = req.params;
    const userOrders = await Orders.find({ user_id });
    res.json(userOrders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
