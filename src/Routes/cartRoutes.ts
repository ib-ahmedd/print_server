import addToCart from "@src/Controllers/cart-controllers/addToCart";
import deleteCartItem from "@src/Controllers/cart-controllers/deleteCartItem";
import getCartItems from "@src/Controllers/cart-controllers/getCartItems";
import updateCart from "@src/Controllers/cart-controllers/updateCart";
import authenticateAccess from "@src/Middlewares/authenticateAccessToken";
import { Router } from "express";

const cartRouter = Router();

cartRouter.get("/get-items/:id", authenticateAccess, getCartItems);
cartRouter.post("/add-item", authenticateAccess, addToCart);
cartRouter.patch("/update-cart", authenticateAccess, updateCart);
cartRouter.delete("/delete-item/:id", authenticateAccess, deleteCartItem);

export default cartRouter;
