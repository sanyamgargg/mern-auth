
import express from "express" ;
import mongoose from "mongoose";
import dotenv from "dotenv" ;
import authRoutes from "./routes/auth.routes.js" ;
import userRoutes from "./routes/user.routes.js" ;
import path from "path" ;
import cookieParser from "cookie-parser";
dotenv.config() ;

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO, {
      });
      console.log('DB connection successful');
    } catch (error) {
      console.error('DB connection unsuccessful', error);
      if (error.cause && error.cause.code === 'ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR') {
        console.error('SSL/TLS error: Please check your SSL configuration.');
      }
    }
  };
  
connectDB();
const app = express() ;

app.use(cookieParser()) ;
app.use(express.json()) ;

app.listen(3000,()=>{
    console.log("Server is running on port: 3000") ;
})

// app.use('/api/user',userRoutes) ;
app.use('/api/auth',authRoutes) ;
app.use('/api/user',userRoutes) ;

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "Something went wrong" ;
    return res.status(statusCode).json({
        success: false ,
        message,
        statusCode
    })
})