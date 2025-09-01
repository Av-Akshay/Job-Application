const express = require("express");
const {handelPostUser,handelLoginUser} = require("../controllers/user.controller")
const router = express.Router();


router.post("/user",handelPostUser);
router.post("/user/login",handelLoginUser);

module.exports = router;

