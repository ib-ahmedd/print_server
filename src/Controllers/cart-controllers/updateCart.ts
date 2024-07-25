import Cart from "@src/Models/cartSchema";
import { CartItem } from "@src/types";
import { Request, Response } from "express";

async function updateCart(req: Request, res: Response) {
  try {
    const { user_id, product_id, quantity }: CartItem = req.body;

    const itemInCart = await Cart.findOne({
      user_id: user_id,
      product_id: product_id,
    });
    if (itemInCart) {
      const newQuantity =
        parseInt(itemInCart.quantity.toString()) +
        parseInt(quantity.toString());
      itemInCart.quantity = newQuantity;
      itemInCart.save();
      res.json(itemInCart);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default updateCart;
