const express = require("express");

const router = express.Router()

const {homePage,getData} = require("../controller/homeController")



router.get("/",homePage)
router.get("/data",getData)



module.exports = router;