"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    product_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },
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
    quantity: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
});
const Cart = (0, mongoose_1.model)("Cart", CartSchema);
exports.default = Cart;
