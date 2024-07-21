import transporter from "@src/Config/NodeMailerConfig";
import sendMail from "@src/utils/sendContactMail";
import { Request, Response } from "express";

async function sendMessage(req: Request, res: Response) {
  const {
    email,
    subject,
    message,
  }: { email: string; subject: string; message: string } = req.body;
  try {
    await transporter.sendMail({
      from: "ahmed1768476@gmail.com",
      to: "ahmedibrahim28199@gmail.com",
      subject: subject,
      html: `<h1>Sender email: ${email}</h1><p>Message: ${message}</p>`,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default sendMessage;
