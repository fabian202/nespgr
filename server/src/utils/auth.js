import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET;

const JWT_OPTS = {
  issuer: "nespgr",
  expiresIn: "8h"
};

export const createToken = user => {
  const token = jwt.sign(user, JWT_SECRET, JWT_OPTS);
  const { iat, exp } = jwt.decode(token);

  return { iat, exp, token };
};

export const verifyToken = token => {
  try {
    return jwt.verify(token, JWT_SECRET, JWT_OPTS);
  } catch (error) {
    return null;
  }
};

export const getTokenFromHeaders = req => {
  const token = req.headers["x-access-token"];

  return token || null;
};