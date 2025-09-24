const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    company:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true
    },
    salary:{
        type:String,
        require:true
    },
    jobType:{
        type:String,
        require:true,
        enum: ["Full-time", "Part-time", "Contract", "Temporary", "Internship"],
    }
}, {
    timestamps: true
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;