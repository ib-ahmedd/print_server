import addOrder from "../Controllers/orders-controller/addOrder";
import getOrders from "../Controllers/orders-controller/getOrders";
import orderDetails from "../Controllers/orders-controller/orderDetails";
import pendingReviews from "../Controllers/orders-controller/pendingReviews";
import review from "../Controllers/orders-controller/review";
import reviewItem from "../Controllers/orders-controller/reviewItem";
import authenticateAccess from "../Middlewares/authenticateAccessToken";
import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/get-orders/:id", authenticateAccess, getOrders);
ordersRouter.get("/pending-reviews/:id", authenticateAccess, pendingReviews);
ordersRouter.get("/review-item/:id", authenticateAccess, reviewItem);
ordersRouter.get("/order/:id", authenticateAccess, orderDetails);
ordersRouter.post("/add-orders", authenticateAccess, addOrder);
ordersRouter.post("/review", authenticateAccess, review);

export default ordersRouter;
