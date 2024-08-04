import Cart from "../../Models/cartSchema";
import { CartItem } from "../../types";
import { Request, Response } from "express";

async function updateCart(req: Request, res: Response) {
  try {
    const { _id, quantity }: CartItem = req.body;

    const itemInCart = await Cart.findOne({
      _id: _id,
    });
    if (itemInCart) {
      itemInCart.quantity = quantity;
      itemInCart.save();
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default updateCart;
