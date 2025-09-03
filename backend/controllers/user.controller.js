const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handelRegisterUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(`${name}, ${email}, ${password}`);
  if (!name || !email || !password)
    return res.status(400).json({ message: "Plese fill all the fields" });
  try {
    const exitsUser = await User.findOne({ email });
    if (exitsUser)
      return res.status(409).json({ message: "You are already Sign UP" });

    const users = await User.create({ name, email, password, role });
    const token = jwt.sign({ user:users._id, role:users.role }, process.env.JWT_SECRET);

    res.json({ message: "Success", user:{id:users._id,name,email,role}, token: token  });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handelLoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Please fill all the fields" });
  try {
    const exitsUser = await User.findOne({ email });
    console.log(exitsUser);
    
    if (!exitsUser) return res.status(409).json({ message: "User not find" });
    const isMatch = await bcrypt.compare(password, exitsUser.password);
    if (!isMatch) return res.status(409).json({ message: "Wrong password" });
    const token = jwt.sign(
      { id: exitsUser._id, role: exitsUser.role },
      process.env.JWT_SECRET
    );
    return res.status(200).json({ message: "Success", token: token , user:{id:exitsUser._id,name:exitsUser.name,email:exitsUser.email,role:exitsUser.role}});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { handelRegisterUser, handelLoginUser };
