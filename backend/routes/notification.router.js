const express = require("express");
const app = express();
const {authorizeRoles,protect} = require("../middleware/auth")
const {handelGetNotification} = require("../controllers/notification.controllers")


const router = express.Router();

router.get("/",protect,authorizeRoles("company"),handelGetNotification)




module.exports = router;