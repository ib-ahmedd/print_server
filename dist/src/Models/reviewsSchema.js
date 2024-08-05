"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ReviewsSchema = new mongoose_1.Schema({
    product_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    reviewer_name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    rating: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
    review_title: {
        type: mongoose_1.Schema.Types.String,
        maxLength: 20,
    },
    review: {
        type: mongoose_1.Schema.Types.String,
        maxLength: 50,
    },
    date_reviewed: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
});
const Reviews = (0, mongoose_1.model)("Reviews", ReviewsSchema);
exports.default = Reviews;
