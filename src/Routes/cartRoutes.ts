import addToCart from "@src/Controllers/cart-controllers/addToCart";
import { Router } from "express";

const cartRouter = Router();

cartRouter.post("/add-to-cart", addToCart);

export default cartRouter;
