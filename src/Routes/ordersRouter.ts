import addOrder from "@src/Controllers/orders-controller/addOrder";
import getOrders from "@src/Controllers/orders-controller/getOrders";
import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/get-orders/:id", getOrders);
ordersRouter.post("/add-orders", addOrder);

export default ordersRouter;
