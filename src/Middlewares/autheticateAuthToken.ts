import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

const authenticateAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jsonwebtoken.verify(
    token ? token : "",
    process.env.AUTH_TOKEN_SECRET ? process.env.AUTH_TOKEN_SECRET : "",
    (err) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      next();
    }
  );
};
export default authenticateAuthToken;
