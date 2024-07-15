import { Router } from "express";
import sendMessage from "@src/Controllers/contact-controller/sendMessage";

const contactRouter = Router();

contactRouter.post("/send-message", sendMessage);

export default contactRouter;
