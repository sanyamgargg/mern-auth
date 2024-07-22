import User from '../models/user.models.js'
import bcryptjs  from 'bcryptjs' ;

export const signup = async(req,res) => {
    const {username,email,password} = req.body ;
    const hashedPassord = bcryptjs.hashSync(password,10) ;
    const newUser = new User({username:username,email,password:hashedPassord}) ; 

    try {
        await newUser.save() ;
        res.status(201).json({
            message: "User created successfully"
        }) 
    } catch (error) {
        res.status(500).json({
            message:"User creation unsuccessful!"
        })
    }
}

