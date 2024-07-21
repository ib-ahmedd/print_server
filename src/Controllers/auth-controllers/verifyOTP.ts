import generateToken from "@src/Helpers/generateToken";
import OTPs from "@src/Models/OTPsSchema";
import { Request, Response } from "express";

async function verifyOTP(req: Request, res: Response) {
  try {
    const { email, code } = req.body;
    const response = await OTPs.findOne({ email: email, code: code });
    if (response) {
      const authToken = generateToken(
        { user: email },
        process.env.AUTH_TOKEN_SECRET
      );
      res.json(authToken);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.json(500);
  }
}

export default verifyOTP;
