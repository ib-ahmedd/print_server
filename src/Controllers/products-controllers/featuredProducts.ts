import Products from "@src/Models/productsSchema";
import { ProductsType } from "@src/types";
import { Request, Response } from "express";

async function featuredProducts(req: Request, res: Response) {
  try {
    const response: ProductsType[] = await Products.find()
      .sort({ sold: 1 })
      .limit(4);
    res.json(response);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

export default featuredProducts;
