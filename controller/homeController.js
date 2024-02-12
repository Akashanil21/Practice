const data = require("../sample_data.json");
const { fetchAllUser } = require("../db/authDb");

// Home page
const homePage = (req, res) => {

  const data = {
    title: "Node js template engine example",
    message: "Welcome to the website",
    message1: "EJS template engine",
  };

  res.render("index", data);
};

// Get all data

const getData = async (req, res) => {
  let user = await fetchAllUser();

  let userInfo = user.data;

  res.render("home", { user: userInfo });
};

module.exports = { homePage, getData };
