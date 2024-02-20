const {Client} = require("pg");


const client = new Client({

    user:"postgres",
    host:"localhost",
    port:"5432",
    database:"warriors",
    password:"Akash@2196"
})


client.connect((err) => {
    if (err) {
      console.log("err : ", err);
    }

    console.log("Connected to Postgresql database");
  });


module.exports = client;