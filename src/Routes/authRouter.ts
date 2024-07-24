import loginUser from "@src/Controllers/auth-controllers/loginUser";
import registerUser from "@src/Controllers/auth-controllers/registerUser";
import requestOtp from "@src/Controllers/auth-controllers/requestOTP";
import resetPassword from "@src/Controllers/auth-controllers/resetPassword";
import verifyOTP from "@src/Controllers/auth-controllers/verifyOTP";
import authenticateAuthToken from "@src/Middlewares/autheticateAuthToken";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/request-otp", requestOtp);
authRouter.post("/verify-otp", verifyOTP);
authRouter.post("/register", authenticateAuthToken, registerUser);
authRouter.post("/reset-password", authenticateAuthToken, resetPassword);

export default authRouter;
