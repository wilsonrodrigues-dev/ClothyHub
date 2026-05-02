import { Router } from "express";
import {
  validateRegister,
  validateLogin,
} from "../validator/auth.validator.js";
import {
  registerController,
  loginController,
  getMe,
  googleCallback,
  setRole,
} from "../controllers/auth.controller.js";
import { identifyUser } from "../middleware/auth.middleware.js";
import passport from "passport";
import config from "../config/config.js";
const router = Router();

router.post("/register", validateRegister, registerController);
router.post("/login", validateLogin, loginController);
router.get("/getMe", identifyUser, getMe);

router.post("/setrole",identifyUser,setRole)
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: config.NODE_ENV=="development"? "http://localhost:5173/login":"/login",
  }),
  googleCallback,
);

export default router;
