const express = require("express");

const router = express.Router()

const {updateUserInfo,displayInfo,getAUser,createUser,deleteUser} = require("../controller/userController")


router.get("/data",displayInfo)
router.get("/user/:id",getAUser)
router.post("/create",createUser)
router.delete("/user/:id",deleteUser)
router.put("/update/:id",updateUserInfo)



module.exports = router;