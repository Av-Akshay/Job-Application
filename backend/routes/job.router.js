const express = require("express");
const {authorizeRoles,protect} = require('../middleware/auth')
const {handelGetJobs, handelPostJobs,handelAppliedJob,handelGetJobsByUserId} = require("../controllers/jobs.controllers")

const router = express.Router();


router.get("/",protect,authorizeRoles("user"),handelGetJobs);
router.get("/jobs/:id",protect,authorizeRoles("company"),handelGetJobsByUserId);
router.get("/post-job",protect,authorizeRoles("company"),handelPostJobs);
router.get("/apply-job/:id",protect,authorizeRoles("company"),handelAppliedJob);


module.exports = router;