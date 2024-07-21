import jsonwebtoken from "jsonwebtoken";

const generateToken = (user: { user: string }, key: string | undefined) => {
  return jsonwebtoken.sign(user, key ? key : "string");
};

export default generateToken;
