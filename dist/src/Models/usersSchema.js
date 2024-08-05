"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsersSchema = new mongoose_1.Schema({
    user_name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    user_password: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    mobile_no: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
    country: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    state: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    city: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    address: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
});
const Users = (0, mongoose_1.model)("Users", UsersSchema);
exports.default = Users;
