const {
  addUser,
  fetchUser,
  updateUser,
  removeUser,
  fetchAllData,
} = require("../db/database_operation");

// Show all info

const displayInfo = async (req, res) => {
  const result = await fetchAllData();
  console.log("result is : ", result);

  if (result.success) {
    return res
      .status(200)
      .json({ data: result.data, message: "Fetched all data successfully" });
  } else {
    return res.status(500).json("Error while fetching data");
  }
};

// Get info of a specific user

const getAUser = async (req, res) => {
  const id = req.params.id;

  const result = await fetchUser(id);

  console.log("result is : ", result);

  if (result.success) {
    return res.status(200).json("Fetched the details of a user successfully");
  } else {
    return res.status(500).json("Error while fetching the details");
  }
};

// Create a User

const createUser = async (req, res) => {
  const body = req.body;

  let { first_name, last_name, email, gender, phone } = body;

  if (!first_name || !last_name || !email || !gender || !phone) {
    return res.status(400).json("Please fill all the field");
  }

  const result = await addUser(body);

  if (result.success) {
    return res.status(200).json("user successfully added to the database");
  } else {
    return res.status(500).json("error while adding user to database");
  }
};

// Update user info

const updateUserInfo = async (req, res) => {
  const id = req.params.id;

  const body = req.body;

  const user = await fetchUser(id);

  let newBody = {
    first_name: body.first_name ? body.first_name : user.data.first_name,
    last_name: body.last_name ? body.last_name : user.data.last_name,
    email: body.email ? body.email : user.data.email,
    gender: body.gender ? body.gender : user.data.gender,
    phone: body.phone ? body.phone : user.data.phone,
  };

  const result = await updateUser(id, newBody);

  console.log("result is : ", result);

  if (result.success) {
    return res.status(200).json("User info updated successfully");
  } else {
    return res.status(500).json("Error while updating user info");
  }
};

// Delete a user

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const result = await removeUser(id);

  if (result.success) {
    return res.status(200).json("User successfully removed");
  } else {
    return res.status(500).json("Error while deleting user");
  }
};

module.exports = {
  updateUserInfo,
  displayInfo,
  getAUser,
  createUser,
  deleteUser,
};
