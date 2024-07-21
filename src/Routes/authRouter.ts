import registerUser from "@src/Controllers/auth-controllers/registerUser";
import requestOtp from "@src/Controllers/auth-controllers/requestOTP";
import authenticateAuthToken from "@src/Middlewares/autheticateAuthToken";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/request-otp", requestOtp);
authRouter.post("/register", authenticateAuthToken, registerUser);

export default authRouter;
