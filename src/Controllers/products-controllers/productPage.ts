import Products from "../../Models/productsSchema";
import Reviews from "../../Models/reviewsSchema";
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
  const comments = await Reviews.find({ product_id: id });
  res.json({ product, relatedProducts, comments });
}

export default productPage;
