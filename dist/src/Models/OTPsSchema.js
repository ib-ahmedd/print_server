"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OTPsSchema = new mongoose_1.Schema({
    email: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    code: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
});
const OTPs = (0, mongoose_1.model)("OTPs", OTPsSchema);
exports.default = OTPs;
