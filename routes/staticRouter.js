const express = require("express");

const router = express.Router();

const {getSignupPage, getLoginPage} = require("../controller/staticController")

router.get("/signup",getSignupPage)
router.get("/login",getLoginPage)

module.exports = router;