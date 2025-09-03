const Job = require("../models/job.model");
const Application = require("../models/application.model");


const handelGetJobs = async(req,res)=>{
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({error:error.message});
    
    }
}

const handelPostJobs = async(req,res)=>{

    const {title, discription,userId,company,location} = req.body;
    if(!title || !discription || !userId || !company || !location){
        res.status(400).json({message:"Please fill all the fields"})
    }
    try {
        const jobPost = await Job.create({
            title,
            discription,
            userId,
            company,
            location
        });
        res.status(201).json({message:"Success",job:jobPost});
    }catch{
       res.status(500).json({error:error.message});
    }
};

const handelGetJobsByUserId = async(req,res)=>{
    try {
        const job = await Job.find({userId:req.user.user});
      if(!job)return res.status(404).json({message:"Job not found"});
        res.status(200).json(job);
    }catch(error){
        res.status(500).json({error:error.message});
    }

}

const handelAppliedJob = async(req,res)=>{
    const {id} = req.params;
    const userId = req.user.id;
    const {portfolioLink} = req.body;

    try {   
      const job = await Job.findById(id);
      if(!job)return res.status(404).json({message:"Job not found"});
      
      const application = await Application.create({
        applicent:userId,
        job:id,
        portfolioLink
      });
      res.status(201).json({message:"Success",application});

    }catch{
        res.status(500).json({error:error.message});
    }

}

module.exports = {handelGetJobs, handelPostJobs, handelGetJobsByUserId,handelAppliedJob};