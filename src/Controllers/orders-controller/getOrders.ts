import Orders from "@src/Models/ordersSchema";
import { Request, Response } from "express";

async function getOrders(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userOrders = await Orders.find({ user_id: id });
    res.json(userOrders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default getOrders;
