import transporter from "@src/Config/NodeMailerConfig";
import OTPs from "@src/Models/OTPsSchema";
import { Request, Response } from "express";

async function requestOtp(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const randomNumber = Math.floor(Math.random() * 10000);

    await OTPs.create({ email, code: randomNumber });
    await transporter.sendMail({
      from: "ahmed1768476@gmail.com",
      to: email,
      subject: "Email Verication",
      html: `<p>Use the code${randomNumber} to verify your email</p>`,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default requestOtp;
