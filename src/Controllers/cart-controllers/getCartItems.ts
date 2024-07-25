import Cart from "@src/Models/cartSchema";
import { Request, Response } from "express";

async function getCartItems(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await Cart.find({ user_id: id });
    res.json(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default getCartItems;
