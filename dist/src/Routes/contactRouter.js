"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendMessage_1 = __importDefault(require("../Controllers/contact-controller/sendMessage"));
const contactRouter = (0, express_1.Router)();
contactRouter.post("/send-message", sendMessage_1.default);
exports.default = contactRouter;
