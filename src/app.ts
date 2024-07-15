import express from "express";
import cors from "cors";
import productsRouter from "./Routes/productsRoutes";
import contactRouter from "./Routes/contactRouter";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api", productsRouter);
app.use("/api", contactRouter);

export default app;
