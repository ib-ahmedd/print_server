"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const featuredProducts_1 = __importDefault(require("../Controllers/products-controllers/featuredProducts"));
const mostLoved_1 = __importDefault(require("../Controllers/products-controllers/mostLoved"));
const shopPage_1 = __importDefault(require("../Controllers/products-controllers/shopPage"));
const productPage_1 = __importDefault(require("../Controllers/products-controllers/productPage"));
const productsRouter = (0, express_1.Router)();
productsRouter.get("/featured-products", featuredProducts_1.default);
productsRouter.get("/most-loved", mostLoved_1.default);
productsRouter.get("/product/:id", productPage_1.default);
productsRouter.post("/shop-page", shopPage_1.default);
exports.default = productsRouter;
