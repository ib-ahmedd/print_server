import { createTransport } from "nodemailer";
import "dotenv/config";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ahmed1768476@gmail.com",
    pass: process.env.GOOGLE_PASS,
  },
});

export default transporter;
