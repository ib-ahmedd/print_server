import Cart from "../../Models/cartSchema";
import Orders from "../../Models/ordersSchema";
import { OrdersType } from "../../types";
import dateFormat from "../../utils/dateFormat";
import { Request, Response } from "express";

async function addOrder(req: Request, res: Response) {
  try {
    const { user_id, orders } = req.body;
    let number = 1;
    const ordersBuild = orders.map((item: OrdersType) => {
      if (number % 2 === 0) {
        item.delivered = false;
        number = number + 1;
        console.log(number);
        console.log(number % 2);
        console.log("true");
      } else {
        item.delivered = true;
        number = number + 1;
        console.log("false");
        console.log(number);
        console.log(number % 2);
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
