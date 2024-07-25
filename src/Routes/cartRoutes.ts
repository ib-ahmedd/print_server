import addToCart from "@src/Controllers/cart-controllers/addToCart";
import updateCart from "@src/Controllers/cart-controllers/updateCart";
import { Router } from "express";

const cartRouter = Router();

cartRouter.post("/add-to-cart", addToCart);
cartRouter.patch("/update-cart", updateCart);

export default cartRouter;
