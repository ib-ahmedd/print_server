import Cart from "@src/Models/cartSchema";
import { Request, Response } from "express";

async function deleteCartItem(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default deleteCartItem;
