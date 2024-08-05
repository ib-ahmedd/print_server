"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginUser_1 = __importDefault(require("../Controllers/auth-controllers/loginUser"));
const registerUser_1 = __importDefault(require("../Controllers/auth-controllers/registerUser"));
const requestOTP_1 = __importDefault(require("../Controllers/auth-controllers/requestOTP"));
const resetPassword_1 = __importDefault(require("../Controllers/auth-controllers/resetPassword"));
const verifyOTP_1 = __importDefault(require("../Controllers/auth-controllers/verifyOTP"));
const autheticateAuthToken_1 = __importDefault(require("../Middlewares/autheticateAuthToken"));
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", loginUser_1.default);
authRouter.post("/request-otp", requestOTP_1.default);
authRouter.post("/verify-otp", verifyOTP_1.default);
authRouter.post("/register", autheticateAuthToken_1.default, registerUser_1.default);
authRouter.patch("/reset-password", autheticateAuthToken_1.default, resetPassword_1.default);
exports.default = authRouter;
