import jwt from "jsonwebtoken";
import { ENV_VARIABLES } from "../config/envVariables.js";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARIABLES.JWT_SECRET, {
      expiresIn: "15d",
    });
    res.cookie("jwt-freetime", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      httpOnly: true, // prevents client-side JavaScript from accessing the cookie
      secure: ENV_VARIABLES.NODE_ENV !== "development",
      sameSite: "strict",
    });

   return token;
};
