import { UsersType } from "@src/types";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Users from "@src/Models/usersSchema";
import generateToken from "@src/Helpers/generateToken";
import dotenv from "dotenv";
dotenv.config();

async function registerUser(req: Request, res: Response) {
  try {
    console.log(req.body);
    const {
      user_name,
      email,
      user_password,
      mobile_no,
      address,
      country,
      city,
      state,
    }: UsersType = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user_password, salt);
    const user: UsersType = await Users.create({
      user_name,
      email,
      user_password: hashedPassword,
      mobile_no,
      address,
      country,
      city,
      state,
    });

    user.user_password = "";

    const accessToken = generateToken(
      { user: email },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({ user, accessToken });
  } catch (err) {
    console.log(err);
  }
}
export default registerUser;
