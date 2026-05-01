import { body, validationResult } from "express-validator";

function validateRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

export const validateRegister = [
  body("email")
    .isEmail()
    .withMessage("Invalid email address"),

  body("contact")
    .notEmpty().withMessage("Contact is required")
    .matches(/^\d{10}$/)
    .withMessage("Contact must be a 10 digit number"),

  body("fullname")
    .notEmpty().withMessage("Fullname is required")
    .isLength({ min: 3 })
    .withMessage("Fullname must be at least 3 characters"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
    body("isSeller").isBoolean().withMessage("Isseller mujst be a boolean value"),
  validateRequest
];

export const validateLogin=[
  body("email").isEmail().withMessage("Emal is invalid"),
  body("password").isLength({min:6}).withMessage("Password must be at least 6 characters"),
  validateRequest
]