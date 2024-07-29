import Orders from "@src/Models/ordersSchema";
import { Request, Response } from "express";

async function addOrder(req: Request, res: Response) {
  try {
    await Orders.insertMany(req.body);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default addOrder;
