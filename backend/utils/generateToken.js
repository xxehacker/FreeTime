import jwt from "jsonwebtoken";
import { ENV_VARIABLES } from "../config/envVariables.js";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARIABLES.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("jwt-freetime", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks, make it not be accessed by JS
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: ENV_VARIABLES.NODE_ENV !== "development",
	});
  console.log(token);
	return token;
}