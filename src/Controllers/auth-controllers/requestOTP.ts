import transporter from "../../Config/NodeMailerConfig";
import OTPs from "../../Models/OTPsSchema";
import Users from "../../Models/usersSchema";
import { Request, Response } from "express";

async function requestOtp(req: Request, res: Response) {
  try {
    const { email, method } = req.body;
    const randomNumber = Math.floor(Math.random() * 10000);

    const userExists = await Users.findOne({ email: email });
    if (method === "register") {
      if (userExists) {
        res.sendStatus(402);
      } else {
        await OTPs.deleteMany({ email: email });
        await OTPs.create({ email, code: randomNumber });
        await transporter.sendMail({
          from: "ahmed1768476@gmail.com",
          to: email,
          subject: "Email Verication",
          html: `<p>Use the code ${randomNumber} to verify your email</p>`,
        });
        res.sendStatus(200);
      }
    } else {
      if (userExists) {
        await OTPs.deleteMany({ email: email });
        await OTPs.create({ email, code: randomNumber });
        await transporter.sendMail({
          from: "ahmed1768476@gmail.com",
          to: email,
          subject: "Email Verication",
          html: `<p>Use the code ${randomNumber} to reset your password</p>`,
        });
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default requestOtp;
