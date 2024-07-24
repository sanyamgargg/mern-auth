import User from '../models/user.models.js'
import bcryptjs  from 'bcryptjs' ;
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv' ;

dotenv.config() ;

// signup auth

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      next(error);
    }
  };

// signin auth
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    console.log('Sign-in request received');
    try {
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
            console.log('User does not exist');
            return next(errorHandler(401, "User does not exist"));
        }
        console.log('User found:', currentUser);

        const isPasswordValid = bcryptjs.compareSync(password, currentUser.password);
        if (!isPasswordValid) {
            console.log('Invalid credentials');
            return next(errorHandler(401, "Invalid credentials"));
        }
        console.log('Password is valid');

        const token = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET);
        const expiryDate = new Date(Date.now() + 3600000);

        const { password: hashedPassword, ...rest } = currentUser._doc;
        console.log('Sending response');
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
            .status(200)
            .json(rest);

    } catch (error) {
        console.error('Error occurred:', error);
        next(error);
    }
};

