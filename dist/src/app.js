"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productsRoutes_1 = __importDefault(require("./Routes/productsRoutes"));
const contactRouter_1 = __importDefault(require("./Routes/contactRouter"));
const authRouter_1 = __importDefault(require("./Routes/authRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const cartRoutes_1 = __importDefault(require("./Routes/cartRoutes"));
const ordersRouter_1 = __importDefault(require("./Routes/ordersRouter"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
app.use("/api/auth", authRouter_1.default);
app.use("/api", productsRoutes_1.default);
app.use("/api", contactRouter_1.default);
app.use("/api", cartRoutes_1.default);
app.use("/api", ordersRouter_1.default);
exports.default = app;
