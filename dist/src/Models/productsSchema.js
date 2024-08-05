"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    product_name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    product_image: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    price: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    free_shipping: {
        type: mongoose_1.Schema.Types.Boolean,
        required: true,
        default: false,
    },
    rating: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
    sold: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
    sale: {
        type: mongoose_1.Schema.Types.Boolean,
        required: true,
    },
    date_in_stock: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
});
const Products = (0, mongoose_1.model)("Products", ProductSchema);
exports.default = Products;
