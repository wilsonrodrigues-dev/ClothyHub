import { Router } from "express";
import { validateRegister,validateLogin } from "../validator/auth.validator.js";
import { registerController,loginController } from "../controllers/auth.controller.js";
const router=Router()


router.post("/register",validateRegister,registerController)
router.post("/login",validateLogin,loginController)


export default router