import addToCart from "@src/Controllers/cart-controllers/addToCart";
import deleteCartItem from "@src/Controllers/cart-controllers/deleteCartItem";
import getCartItems from "@src/Controllers/cart-controllers/getCartItems";
import updateCart from "@src/Controllers/cart-controllers/updateCart";
import { Router } from "express";

const cartRouter = Router();

cartRouter.get("/get-items/:id", getCartItems);
cartRouter.post("/add-item", addToCart);
cartRouter.patch("/update-cart", updateCart);
cartRouter.delete("/delete-item/:id", deleteCartItem);

export default cartRouter;
