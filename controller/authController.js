const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config()

const secret = process.env.JWT_SECRET

const { addUser, deleteUser, fetchUser } = require("../db/authDb");

// Register a user

const registerUser = async (req, res) => {
  const body = req.body;

  const { name, email, phone, password } = body;

  if (!(name && email && phone && password)) {
    return res.status(400).json("Please fill all the required fields");
  }

  const existingUser = await fetchUser(email);


  if (existingUser.success) {
    return res.json("The given email is already registered");
  }

  let user = {};

  let hashedPassword = await bcrypt.hash(body.password, 10);

  user.name = body.name;
  user.email = body.email;
  user.phone = body.phone;
  user.password = hashedPassword;

  const result = await addUser(user);

  if (result.success) {
    res.redirect('/static/login')
    //return res.status(200).json("user successfully registered");
  } else {
    return res.status(500).json("error while registering user");
  }
};

// Login user

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const result = await fetchUser(email);

  if (!result.success) {
    res.status(404).json("Invalid email id");
  } else {
    let hasedPasswd = result.data.password;

    let match = await bcrypt.compare(password, hasedPasswd);

    if (!match) {
      return res.status(404).json("Incorrect password");
    }

    let data = result.data;
    let id = data.id;
    let email = data.email;

    const token = jwt.sign(
      {
        id,
        email,
      },
      secret,
      { expiresIn: "15m" }
    );
    return res.json({ message: "Login successful", token: token });
  }
};

// Authorize user

const userAuthorize = async (req, res) => {
  const token = req.query.token;

  jwt.verify(token, secret, (err, data) => {
    if (err) {
      console.log("err : ", err);
      res.status(400).json({success:false,message:"Token verification failed"});
    } else {
      console.log("data is : ", data);
      res.status(200).json({success:true,message:"Token verification successful"});
    }
  });
};

// Delete a user

const removeUser = async (req, res) => {
  const id = req.params.id;

  const result = await deleteUser(id);

  if (result.success) {
    return res.status(200).json("User deleted successfully");
  } else {
    return res.status(500).json("error while deleting user");
  }
};

module.exports = { registerUser, removeUser, userLogin, userAuthorize };
