import { Router } from "express";
import sendMessage from "../Controllers/contact-controller/sendMessage";

const contactRouter = Router();

contactRouter.post("/send-message", sendMessage);

export default contactRouter;
