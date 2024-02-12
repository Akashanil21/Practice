const fs = require("fs");


const createUser = (req, res) => {
    const body = req.body;
    const id = data.length;
  
    data.push({ id: id + 1, ...body });
  
    fs.writeFile("./sample_data.json", JSON.stringify(data), (err, result) => {
      console.log("successfully added");
      return res.json({ status: "great", id: data.length });
    });
  };


  const getAUser = (req, res) => {
    const id = parseInt(req.params.id);
  
    const user = data.find((user) => user.id === id);
  
    return res.json({ success: true, user: user });
  };


  const updateUserInfo = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
  
    for (let u in data) {
      if (data[u].id === id) {
        body.first_name
          ? (data[u].first_name = body.first_name)
          : data[u].first_name;
        body.last_name ? (data[u].last_name = body.last_name) : data[u].last_name;
        body.email ? (data[u].email = body.email) : data[u].email;
        body.gender ? (data[u].gender = body.gender) : data[u].gender;
        body.phone ? (data[u].phone = body.phone) : data[u].phone;
  
        fs.writeFile(
          "./sample_data.json",
          JSON.stringify(data, null, 2),
          (err) => {
            if (err) {
              return res.json({
                status: false,
                message: "Failed to write into the file",
              });
            }
            return res.json({ status: "success", user: data[u] });
          }
        );
      }
    }
  };


  const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
  
    const newArray = data.filter((user) => user.id !== id);
  
    fs.writeFile(
      "./sample_data.json",
      JSON.stringify(newArray, null, 2),
      (err) => {
        if (err) {
          return res.json({
            success: false,
            message: "error while writing into file",
          });
        }
  
        return res.json({ success: true, data: newArray });
      }
    );
  };

module.exports = {createUser,getAUser,updateUserInfo,deleteUser};