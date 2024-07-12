import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

export default app;
