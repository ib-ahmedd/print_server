import { Router } from "express";

import featuredProducts from "@src/Controllers/products-controllers/featuredProducts";
import mostLoved from "@src/Controllers/products-controllers/mostLoved";

const productsRouter = Router();

productsRouter.get("/featured-products", featuredProducts);
productsRouter.get("/most-loved", mostLoved);

export default productsRouter;
