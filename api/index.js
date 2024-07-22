import { config } from "dotenv";
import express from "express" ;
import mongoose from "mongoose";
import dotenv from "dotenv" ;
import authRoutes from "./routes/auth.routes.js" ;
import userRoutes from "./routes/user.routes.js" ;
import path from "path" ;
dotenv.config() ;

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DB connection successful") ;
})
.catch((err)=>{
    console.log("DB connection Unsuccessful",err)
})

const app = express() ;

app.use(express.json()) ;

app.listen(3000,()=>{
    console.log("Server is running on port: 3000") ;
})

// app.use('/api/user',userRoutes) ;
app.use('/api/auth',authRoutes) ;
app.use('/api/user',userRoutes) ;