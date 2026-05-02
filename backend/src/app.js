import express from 'express'
const app=express()
import morgan from 'morgan'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import passport from 'passport'
import {Strategy as GoogleStratergy } from 'passport-google-oauth20'
import config from './config/config.js'

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(passport.initialize())

passport.use(new GoogleStratergy({
    clientID:config.GOOGLE_CLIENT_ID,
    clientSecret:config.GOOGLE_CLIENT_SECRET,
    callbackURL:"/api/auth/google/callback"

},(accessToken,refreshToken,profile,done)=>{
    return done(null,profile)
}))


app.use("/api/auth",authRouter)



export default app