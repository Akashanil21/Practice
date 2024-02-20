

const getSignupPage = (req,res) =>{

    res.render('signup')
}

const getLoginPage = (req,res) =>{

    res.render('login')
}

module.exports = {getSignupPage, getLoginPage}