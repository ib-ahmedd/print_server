import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/get-orders/:id");
ordersRouter.post("/add-orders");

export default ordersRouter;
