import Products from "@src/Models/productsSchema";
import { Request, Response } from "express";

async function productPage(req: Request, res: Response) {
  const { id } = req.params;
  const product = await Products.findById(id);
  const relatedProducts = await Products.find({
    category: product?.category,
  })
    .where("_id")
    .ne(id)
    .limit(3);
  res.json({ product, relatedProducts });
}

export default productPage;
