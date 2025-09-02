const express = require("express");
const {handelRegisterUser,handelLoginUser} = require("../controllers/user.controller")
const router = express.Router();


router.post("/user/signup",handelRegisterUser);
router.post("/user/signin",handelLoginUser);

module.exports = router;

