import { response } from "express";
import User from "../models/User.js";
const login = async(req, res) => {
     const { email, password } = req.body;
     await User.findOne({ where: { email: email, password: password } })
     .then(user => {
         if (user)
             {    
                res.status(200).json({ message: 'Login successful', user: user,result:true });
            } else {    
                res.status(401).json({ message: 'Invalid email or password',result:false });
            }
   
})

}

const register = (req, res) => {
    const { username, email, password } = req.body;
    const user=new User({username,email,password});
    user.save()
    .then(response => {
        res.status(201).json({ message: 'User registered successfully', user: response,result:true });
    })
    .catch(err=>{
        res.status(500).json({message:'Error registering user', error:err,result:false });
    });
  
}

export default { 
    login,
    register
 };