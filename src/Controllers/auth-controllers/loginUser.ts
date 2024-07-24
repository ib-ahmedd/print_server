import generateToken from "@src/Helpers/generateToken";
import Users from "@src/Models/usersSchema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import "dotenv/config";

async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      email: email,
    });

    if (user) {
      bcrypt.compare(password, user.user_password, (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        }
        if (result) {
          const accessToken = generateToken(
            { user: email },
            process.env.ACCESS_TOKEN_SECRET
          );
          res.json({ user, accessToken });
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export default loginUser;
