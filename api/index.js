import { config } from "dotenv";
import express from "express" ;
import mongoose from "mongoose";
import dotenv from "dotenv" ;
dotenv.config() ;

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DB connection successful") ;
})
.catch((err)=>{
    console.log("DB connection Unsuccessful",err)
})

const app = express() ;
app.listen(3000,()=>{
    console.log("Server is running on port: 3000") ;
})