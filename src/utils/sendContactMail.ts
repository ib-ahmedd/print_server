import transporter from "@src/Config/NodeMailerConfig";

async function sendContactMail(
  email: string,
  subject: string,
  message: string
) {
  const mailOptions = {
    from: "ahmed1768476@gmail.com",
    to: "ahmedibrahim28199@gmail.com",
    subject: subject,
    html: `<h1>Sender email: ${email}</h1><p>Message: ${message}</p>`,
  };
  await transporter.sendMail(mailOptions);
}

export default sendContactMail;
