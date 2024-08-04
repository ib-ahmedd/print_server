import loginUser from "../Controllers/auth-controllers/loginUser";
import registerUser from "../Controllers/auth-controllers/registerUser";
import requestOtp from "../Controllers/auth-controllers/requestOTP";
import resetPassword from "../Controllers/auth-controllers/resetPassword";
import verifyOTP from "../Controllers/auth-controllers/verifyOTP";
import authenticateAuthToken from "../Middlewares/autheticateAuthToken";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/request-otp", requestOtp);
authRouter.post("/verify-otp", verifyOTP);
authRouter.post("/register", authenticateAuthToken, registerUser);
authRouter.patch("/reset-password", authenticateAuthToken, resetPassword);

export default authRouter;
