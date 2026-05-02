import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

async function sendTokenResponse(user, res, message) {
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    config.JWT_SECRET,
    { expiresIn: "7d" },
  );

  res.cookie("token", token);
  res.status(200).json({
    message,
    success: true,
    user: {
      id: user._id,
      email: user.email,
      contact: user.contact,
      fullname: user.fullname,
      role: user.role,
    },
  });
}

export async function registerController(req, res) {
  const { fullname, contact, email, password, isSeller } = req.body;

  try {
    const isUserExists = await userModel.findOne({
      $or: [{ email }, { contact }],
    });

    if (isUserExists) {
      res.status(400).json({
        message: "User with this email or contact already exists",
      });
    }

    const user = await userModel.create({
      fullname,
      contact,
      email,
      password,
      role: isSeller ? "seller" : "buyer",
    });
    await sendTokenResponse(user, res, "user registerd successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

export async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "user dose not exists invalid email",
      success: false,
    });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  await sendTokenResponse(user, res, "user logged in successfully");
}

export async function getMe(req, res) {
  console.log(req.user.id);
  const user = await userModel.findById(req.user.id);
  res.status(200).json({
    message: "user fetched successfully",
    user: {
      id: user._id,
      email: user.email,
      contact: user.contact,
      fullname: user.fullname,
      role: user.role,
    },
  });
}
