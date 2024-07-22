import mongoose from "mongoose" ;

const userSchema = new mongoose.Schema({
    username:{
        type:"string" ,
        requried: "true",
        unique: "true"
    },
    email:{
        type:"string" ,
        requried: "true",
        unique: "true"
    },
    password: {
        type: "string",
        required: "true"
    }
},{timestamps:true}) ;

const User = mongoose.model('User',userSchema) ;
export default User ;