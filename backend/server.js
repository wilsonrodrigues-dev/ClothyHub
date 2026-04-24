import app from "./src/app.js";
import connectDB from "./src/config/connectDB.js";

connectDB()

app.listen(3000,()=>{
    console.log("server running on port 3000")
})