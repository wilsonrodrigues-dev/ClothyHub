import {body,validationResult} from 'express-validator'

function validationRequest(req,res,next){
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            message:"validation error",
            errors:errors.array
        })
    }
    next()
}

export const createProductValidator=()=>{
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("priceAmount").isNumeric().withMessage("Price must me a number"),
    body("priceCurrency").notEmpty().withMessage("currency is required"),
    validationRequest
}