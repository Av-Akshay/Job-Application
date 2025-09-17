const express = require("express");
const {authorizeRoles,protect} = require('../middleware/auth')
const {handelGetJobs, handelPostJobs,handelAppliedJob,handelGetJobsByUserId,handelDeliverFilterData} = require("../controllers/jobs.controllers")

const router = express.Router();


router.get("/",protect,authorizeRoles("user"),handelGetJobs);
router.get("/companyjobs/:id",protect,authorizeRoles("company"),handelGetJobsByUserId);
router.post("/post-job",protect,authorizeRoles("company"),handelPostJobs);
router.post("/apply-job/:id",protect,authorizeRoles("company"),handelAppliedJob);
router.get("/filterjobs",protect,authorizeRoles("user"),handelDeliverFilterData)



module.exports = router;