import express from "express";
import {
  handleUserSignup,
  handleUserLogin,
  handleUserLogout,
  handleAuthCheck,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/logout", handleUserLogout);

router.get("/authcheck", protectRoute, handleAuthCheck);

export default router;
