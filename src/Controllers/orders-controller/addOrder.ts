import Cart from "@src/Models/cartSchema";
import Orders from "@src/Models/ordersSchema";
import { OrdersType } from "@src/types";
import dateFormat from "@src/utils/dateFormat";
import { Request, Response } from "express";

async function addOrder(req: Request, res: Response) {
  try {
    const { user_id, orders } = req.body;
    const ordersBuild = orders.map((item: OrdersType) => {
      let number = 1;
      if (number % 2 === 0) {
        item.delivered = false;
        number = number + 1;
      } else {
        item.delivered = true;
        number = number + 1;
      }
      item.reviewed = false;
      item.date_ordered = dateFormat();
      return item;
    });
    await Orders.insertMany(ordersBuild);
    await Cart.deleteMany({ user_id });
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default addOrder;
