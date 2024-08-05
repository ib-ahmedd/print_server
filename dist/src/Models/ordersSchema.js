"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrdersSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    product_id: {
        type: mongoose_1.Schema.Types.ObjectId,
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
    date_ordered: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    delivered: {
        type: mongoose_1.Schema.Types.Boolean,
        required: true,
    },
    reviewed: {
        type: mongoose_1.Schema.Types.Boolean,
        required: true,
    },
});
const Orders = (0, mongoose_1.model)("Orders", OrdersSchema);
exports.default = Orders;
