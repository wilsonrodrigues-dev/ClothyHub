import mongoose from 'mongoose'

const productsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    price:{
        amount:{
            type:String,
            required:true
        },
        currency:{
            type:String,
            enum:["INR","USD","GBP","EUR"],
            default:"INR"
        }
    },
    images:[
        {
            url:{
                type:String,
                required:true
            }
        }
    ]
},{timestamps:true})

const productsModel=mongoose.model("products",productsSchema)

export default productsModel