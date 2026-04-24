import { Router } from "express";
import { validateRegister } from "../validator/auth.validator.js";
import { registerController,loginController } from "../controllers/auth.controller.js";
const router=Router()


router.post("/register",validateRegister,registerController)
router.post("/login",validateRegister,loginController)


export default router