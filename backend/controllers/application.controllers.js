const Application = require("../models/application.model");
const Job = require("../models/job.model");
const User = require("../models/user.model");
const Notification = require("../models/notification.model");

const handelApplyJob = async(req,res)=>{
    const {id,portfolioLink} = req.body;

    const userId = req.user.id;
    if(!id){
        return res.status(400).json({message:"Job id is required"});
    }
    try {
        const isApplied = await Application.findOne({applicent:userId,job:id});
        if(isApplied) return res.status(400).json({message:"You have already applied for this job"});
        const job = await Job.findById(id);
        if(!job) return res.status(404).json({message:"Job not found"});
        const application = await Application.create({
            applicent:userId,
            job:id,
            portfolioLink
        });
        const notification = await Notification.create({
            applicant:userId,
            job:id
        });
        if(!notification) return res.status(500).json({message:"Notification not created"})
        return res.status(201).json({message:"Success",application});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = {handelApplyJob};