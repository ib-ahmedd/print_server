import Cart from "@src/Models/cartSchema";
import { CartItem } from "@src/types";
import { Request, Response } from "express";

async function addToCart(req: Request, res: Response) {
  try {
    const {
      user_id,
      product_id,
      product_name,
      product_image,
      product_price,
      quantity,
    }: CartItem = req.body;

    const productInCart = await Cart.findOne({
      user_id: user_id,
      product_id: product_id,
    });
    console.log(productInCart);
    if (productInCart) {
        Cart.updateOne
    } else {
      const cartItem = new Cart({
        user_id,
        product_id,
        product_name,
        product_image,
        product_price,
        quantity,
      });
      //   await cartItem.save();
      res.json(cartItem);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default addToCart;
