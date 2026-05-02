import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGO_URI){
    throw  new Error("MONGO URI NOT FOUND")
}

if(!process.env.JWT_SECRET){
    throw new Error("JWT SECRET NOT FOUND");
}

if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("GOOGLE client id not found")
}

if(!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("Goole client secret not found");
    
}

const config={
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
    NODE_ENV:process.env.NODE_ENV || "development"
}

export default config