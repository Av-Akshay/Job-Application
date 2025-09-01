const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        console.log(`hashPassword is ${hashPassword}`);
        return hashPassword
    } catch (error) {
        console.error(error.message);
    }

}


const handelPostUser = async (req, res) => {

    const { name, email, password } = req.body;
    console.log(`${name}, ${email}, ${password}`);


    if (!name || !email || !password) return res.status(400).json({ message: "Plese fill all the fields" })
    

    try {
        const exitsUser = await User.findOne({email});
        
        if(exitsUser)return res.status(409).json({message: "You are already Sign UP"})

            console.log(hashPassword(password));
            
            const userDetail = {
            name,
            email,
            password: await hashPassword(password)
            }
            
        const users = await User.create(userDetail);
    console.log(`user is ${users}`);
    
        res.json({ message: "Success", user: users });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

};

const handelLoginUser = async(req,res)=>{
const {email,password} = req.body;
if(!email || !password)return res.status(400).json({message:"Please fill all the fields"})
    try {
        const exitsUser = await User.findOne({email});
        if(!exitsUser)return res.status(409).json({message:"User not find"})
        const isMatch = await bcrypt.compare(password, exitsUser.password);
        if (!isMatch)return res.status(409).json({message:"Wrong password"});
        const token = jwt.sign({name:exitsUser?.name, email:email}, "secretkey123");
       return res.status(200).json({message:"Success",token:token})

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = { handelPostUser, handelLoginUser }