import Users from "@src/Models/usersSchema";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

async function resetPassword(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await Users.findOneAndUpdate(
      { email: email },
      { user_password: hashedPassword }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
}

export default resetPassword;
