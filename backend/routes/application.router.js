const express = require("express");
const app = express();
const {authorizeRoles,protect} = require("../middleware/auth")
const {handelApplyJob} = require("../controllers/application.controllers")


const router = express.Router()

router.post("/",protect,authorizeRoles("user"),handelApplyJob);


module.exports = router;