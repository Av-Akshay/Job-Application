const Job = require("../models/job.model");
const Application = require("../models/application.model");

const handelGetJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handelPostJobs = async (req, res) => {
  const { title, discription, userId, company, location } = req.body;
  if (!title || !discription || !userId || !company || !location) {
    res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const jobPost = await Job.create({
      title,
      discription,
      userId,
      company,
      location,
    });
    res.status(201).json({ message: "Success", job: jobPost });
  } catch {
    res.status(500).json({ error: error.message });
  }
};

const handelGetJobsByUserId = async (req, res) => {
  try {
    const job = await Job.find({ userId: req.user.user });
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handelAppliedJob = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { portfolioLink } = req.body;

  try {
    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const application = await Application.create({
      applicent: userId,
      job: id,
      portfolioLink,
    });
    res.status(201).json({ message: "Success", application });
  } catch {
    res.status(500).json({ error: error.message });
  }
};
const handelDeliverFilterData = async (req, res) => {
  const { title,location, company } = req.query;
  console.log(`title is ${title}`);
  
let filter={};
  if (title && title.trim() !== "") {
  filter.title = new RegExp(title, "i");
}
  if (location && location.trim() !== "") {
  filter.location = new RegExp(location, "i")
}
if (company && company.trim() !== "") {
  filter.company = new RegExp(company, "i")
}
 console.log(filter);
 
  try {
    const filterJob = await Job.find(filter);
    if (filterJob.length === 0) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(filterJob);
  } catch (error) {
    res.status(500).json({ error: "not connected" });
  }
};

module.exports = {
  handelGetJobs,
  handelPostJobs,
  handelGetJobsByUserId,
  handelAppliedJob,
  handelDeliverFilterData,
};
