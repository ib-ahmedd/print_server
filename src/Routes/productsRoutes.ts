import { Router } from "express";

import featuredProducts from "../Controllers/products-controllers/featuredProducts";
import mostLoved from "../Controllers/products-controllers/mostLoved";
import shopPage from "../Controllers/products-controllers/shopPage";
import productPage from "../Controllers/products-controllers/productPage";

const productsRouter = Router();

productsRouter.get("/featured-products", featuredProducts);
productsRouter.get("/most-loved", mostLoved);
productsRouter.get("/product/:id", productPage);
productsRouter.post("/shop-page", shopPage);

export default productsRouter;
