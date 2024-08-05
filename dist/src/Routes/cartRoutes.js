"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addToCart_1 = __importDefault(require("../Controllers/cart-controllers/addToCart"));
const deleteCartItem_1 = __importDefault(require("../Controllers/cart-controllers/deleteCartItem"));
const getCartItems_1 = __importDefault(require("../Controllers/cart-controllers/getCartItems"));
const updateCart_1 = __importDefault(require("../Controllers/cart-controllers/updateCart"));
const authenticateAccessToken_1 = __importDefault(require("../Middlewares/authenticateAccessToken"));
const express_1 = require("express");
const cartRouter = (0, express_1.Router)();
cartRouter.get("/get-items/:id", authenticateAccessToken_1.default, getCartItems_1.default);
cartRouter.post("/add-item", authenticateAccessToken_1.default, addToCart_1.default);
cartRouter.patch("/update-cart", authenticateAccessToken_1.default, updateCart_1.default);
cartRouter.delete("/delete-item/:id", authenticateAccessToken_1.default, deleteCartItem_1.default);
exports.default = cartRouter;
