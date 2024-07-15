import sendMail from "@src/utils/sendMail";
import { Request, Response } from "express";

async function sendMessage(req: Request, res: Response) {
  const {
    email,
    subject,
    message,
  }: { email: string; subject: string; message: string } = req.body;
  try {
    await sendMail(email, subject, message);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default sendMessage;
