import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const identifySeller = async(req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorised Access",
      success: false,
    });
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user=await userModel.findById(decoded.id)

    if(!user){
        return res.status(401).json({
      message: "Unauthorised Access",
      success: false,
    });
    }

    if (user.role !== "seller") {
            return res.status(403).json({
      message: "Forbiden Access",
      success: false,
    });

    }
          req.user = decoded;
      next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      message: "Unauthorised Access",
      success: false,
    });
  }
};
