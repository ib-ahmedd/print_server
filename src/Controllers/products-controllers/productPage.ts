import Products from "@src/Models/productsSchema";
import { ProductsType } from "@src/types";
import { Request, Response } from "express";

async function productPage(req: Request, res: Response) {
  try {
    const { pageNo }: { pageNo: number } = req.body;
    const offset = pageNo * 9;
    const products: ProductsType[] = await Products.find()
      .skip(offset)
      .limit(9);
    const productsCategories = await Products.distinct("category");
    const productsCount = await Products.countDocuments({});
    const hotDeals = await Products.find({ sale: true });

    const data = {
      products,
      productsCategories,
      productsCount,
      hotDeals,
    };
    res.json(data);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

export default productPage;
