const express = require("express");

const router = express.Router();

const {getSignupPage, getLoginPage, getUploadPage,uploadFile} = require("../controller/staticController")
const upload = require('../middleware/upload_file')

router.get("/signup",getSignupPage)
router.get("/login",getLoginPage)
router.get("/upload",getUploadPage)
router.post("/upload",upload.single("pImage"),uploadFile)

module.exports = router;