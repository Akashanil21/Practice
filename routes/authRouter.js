const express = require("express");

const router = express.Router()

const {registerUser,removeUser,userLogin,userAuthorize} = require("../controller/authController")


router.post("/register",registerUser)
router.delete("/:id",removeUser)
router.get("/login",userLogin)
router.post("/authorize",userAuthorize)



module.exports = router;