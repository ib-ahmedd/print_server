import Orders from "../../Models/ordersSchema";
import { Request, Response } from "express";

async function orderDetails(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await Orders.findOne({ _id: id });
    res.json(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default orderDetails;
