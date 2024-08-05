"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const authenticateAuthToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token ? token : "", process.env.AUTH_TOKEN_SECRET ? process.env.AUTH_TOKEN_SECRET : "", (err) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }
        next();
    });
};
exports.default = authenticateAuthToken;
