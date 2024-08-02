import addOrder from "@src/Controllers/orders-controller/addOrder";
import getOrders from "@src/Controllers/orders-controller/getOrders";
import orderDetails from "@src/Controllers/orders-controller/orderDetails";
import pendingReviews from "@src/Controllers/orders-controller/pendingReviews";
import review from "@src/Controllers/orders-controller/review";
import reviewItem from "@src/Controllers/orders-controller/reviewItem";
import authenticateAccess from "@src/Middlewares/authenticateAccessToken";
import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/get-orders/:id", authenticateAccess, getOrders);
ordersRouter.get("/pending-reviews/:id", authenticateAccess, pendingReviews);
ordersRouter.get("/review-item/:id", authenticateAccess, reviewItem);
ordersRouter.get("/order/:id", authenticateAccess, orderDetails);
ordersRouter.post("/add-orders", authenticateAccess, addOrder);
ordersRouter.post("/review", authenticateAccess, review);

export default ordersRouter;
