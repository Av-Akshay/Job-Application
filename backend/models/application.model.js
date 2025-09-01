const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    applicent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    },
    portfolioLink:{
        type:String,
        require:true
    }
},{
    timestamps:true
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;