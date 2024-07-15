import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ahmed1768476@gmail.com",
    pass: process.env.GOOGLE_PASS,
  },
});

async function sendMail(email: string, subject: string, message: string) {
  const mailOptions = {
    from: "ahmed1768476@gmail.com",
    to: "ahmedibrahim28199@gmail.com",
    subject: subject,
    html: `<h1>Sender email: ${email}</h1><p>Message: ${message}</p>`,
  };
  await transporter.sendMail(mailOptions);
}

export default sendMail;
