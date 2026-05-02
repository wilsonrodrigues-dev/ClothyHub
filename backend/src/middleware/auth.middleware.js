import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import config from "../config/config.js";

export async function identifyUser(req,res,next) {
    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"token not provided",
            success:"false"
        })
    }

    try {
        const decoded=jwt.verify(token,config.JWT_SECRET)
        
        req.user=decoded
        next()

    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        })
        
    }
    
}