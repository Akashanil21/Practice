const data = require("../sample_data.json");



// Home page
const homePage = (req, res) => {
  //res.send("Welcome to home page");

  const data = {
    title:"Node js template engine example",
    message:"Welcome to the website",
    message1:"EJS template engine"
  }

  res.render('index',data)
};


// Get all data

const getData = (req, res) => {
  // const html = `

  //   <ul>
  //   ${data.map((data) => `<li>${data.first_name}</li>`).join("")}
  //   </ul>

  //   `;

  // return res.send(html);

  res.render('home')
};

module.exports = { homePage, getData };
