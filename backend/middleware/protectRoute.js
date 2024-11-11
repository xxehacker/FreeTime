import jwt from "jsonwebtoken";
import { ENV_VARIABLES } from "../config/envVariables.js";
import { User } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt-freetime"];
    // console.log(token)

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, ENV_VARIABLES.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - Invalid token" });
    }

    // userId : i passed userId in the jwt payload

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
