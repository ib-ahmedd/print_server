import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

const authenticateAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) return res.sendStatus(401);

    jsonwebtoken.verify(
      token ? token : "",
      process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : "",
      (err: any) => {
        if (err) {
          console.log(err);
          return res.sendStatus(403);
        }
        next();
      }
    );
  } catch (err) {
    console.log(err);
  }
};
export default authenticateAccess;
