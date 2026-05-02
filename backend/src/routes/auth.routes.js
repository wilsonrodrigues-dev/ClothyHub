import { Router } from "express";
import { validateRegister,validateLogin } from "../validator/auth.validator.js";
import { registerController,loginController,getMe } from "../controllers/auth.controller.js";
import { identifyUser } from "../middleware/auth.middleware.js";
const router=Router()


router.post("/register",validateRegister,registerController)
router.post("/login",validateLogin,loginController)
router.get("/getMe",identifyUser,getMe) 

export default router