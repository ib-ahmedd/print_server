import Products from "@src/Models/productsSchema";
import { ProductsType } from "@src/types";
import { sortColumn } from "@src/utils/sortColumn";
import { Request, Response } from "express";

async function productPage(req: Request, res: Response) {
  try {
    const { page, sortOption, priceRange, selectedCategory } = req.body;
    let categoriesCount = {};

    const offset = (page - 1) * 9;
    const column = sortColumn(sortOption);
    const category =
      selectedCategory !== "default" ? { category: selectedCategory } : {};

    const products: ProductsType[] = await Products.find(category)
      .where("price")
      .lt(priceRange)
      .sort(column)
      .skip(offset)
      .limit(9);
    const productsCategories = await Products.distinct("category");
    const productsCount = await Products.countDocuments(category)
      .where("price")
      .lt(priceRange);
    const hotDeals = await Products.find({ sale: true }).limit(6);
    for (let i = 0; i < productsCategories.length; i++) {
      const count = await Products.countDocuments({
        category: productsCategories[i],
      })
        .where("price")
        .lt(priceRange);
      categoriesCount = { ...categoriesCount, [productsCategories[i]]: count };
    }

    const data = {
      products,
      productsCategories,
      productsCount,
      hotDeals,
      categoriesCount,
    };
    res.json(data);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

export default productPage;
