
const getSignupPage = (req,res) =>{

    res.render('signup')
}

const getLoginPage = (req,res) =>{

    res.render('login')
}

const getUploadPage = (req,res) =>{

    res.render('upload')
}

const uploadFile = (req,res) =>{

    res.send("File uploaded successfully")

}

module.exports = {getSignupPage, getLoginPage, getUploadPage, uploadFile}