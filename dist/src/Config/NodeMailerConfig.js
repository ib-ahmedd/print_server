"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
require("dotenv/config");
const transporter = (0, nodemailer_1.createTransport)({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "ahmed1768476@gmail.com",
        pass: process.env.GOOGLE_PASS,
    },
});
exports.default = transporter;
