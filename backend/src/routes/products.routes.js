import { Router } from "express";
import { identifySeller } from "../middleware/seller.middleware.js";
import { createProduct } from "../controllers/products.controller.js";
import multer from 'multer'
import { createProductValidator } from "../validator/product.validator.js";

const router=Router()


const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        fieldSize:5*1024*1024,
    }
})


router.post("/",identifySeller,createProductValidator,upload.array('images',7),createProduct)


export default router