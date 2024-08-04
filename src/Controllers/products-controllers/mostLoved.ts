import Products from "../../Models/productsSchema";
import { ProductsType } from "../../types";
import { Request, Response } from "express";

async function mostLoved(req: Request, res: Response) {
  try {
    const response: ProductsType[] = await Products.find()
      .sort({ rating: 1 })
      .limit(4);
    res.json(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default mostLoved;
