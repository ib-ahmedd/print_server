import addToCart from "../Controllers/cart-controllers/addToCart";
import deleteCartItem from "../Controllers/cart-controllers/deleteCartItem";
import getCartItems from "../Controllers/cart-controllers/getCartItems";
import updateCart from "../Controllers/cart-controllers/updateCart";
import authenticateAccess from "../Middlewares/authenticateAccessToken";
import { Router } from "express";

const cartRouter = Router();

cartRouter.get("/get-items/:id", authenticateAccess, getCartItems);
cartRouter.post("/add-item", authenticateAccess, addToCart);
cartRouter.patch("/update-cart", authenticateAccess, updateCart);
cartRouter.delete("/delete-item/:id", authenticateAccess, deleteCartItem);

export default cartRouter;
