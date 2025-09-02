const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:["user","company"],
        default:"user"
    }
},{
    timestamps:true
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User",userSchema);



module.exports = User