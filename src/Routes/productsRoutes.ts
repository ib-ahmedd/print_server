import { Router } from "express";

import featuredProducts from "@src/Controllers/products-controllers/featuredProducts";
import mostLoved from "@src/Controllers/products-controllers/mostLoved";
import shopPage from "@src/Controllers/products-controllers/shopPage";

const productsRouter = Router();

productsRouter.get("/featured-products", featuredProducts);
productsRouter.get("/most-loved", mostLoved);
productsRouter.post("/product-page", shopPage);

export default productsRouter;
