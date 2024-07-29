import express from "express";
import cors from "cors";
import productsRouter from "./Routes/productsRoutes";
import contactRouter from "./Routes/contactRouter";
import authRouter from "./Routes/authRouter";
import bodyParser from "body-parser";
import cartRouter from "./Routes/cartRoutes";
import ordersRouter from "./Routes/ordersRouter";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api", productsRouter);
app.use("/api", contactRouter);
app.use("/api", cartRouter);
app.use("/api", ordersRouter);

export default app;
