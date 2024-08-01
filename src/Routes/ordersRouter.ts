import addOrder from "@src/Controllers/orders-controller/addOrder";
import getOrders from "@src/Controllers/orders-controller/getOrders";
import pendingReviews from "@src/Controllers/orders-controller/pendingReviews";
import authenticateAccess from "@src/Middlewares/authenticateAccessToken";
import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/get-orders/:id", authenticateAccess, getOrders);
ordersRouter.get("/pending-reviews/:id", authenticateAccess, pendingReviews);
ordersRouter.post("/add-orders", authenticateAccess, addOrder);

export default ordersRouter;
