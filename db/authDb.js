const client = require("./database");

const addUser = async (userData) => {
  try {
    const { name, email, phone, password } = userData;

    const valueArray = [name, email, phone, password];

    const query = `INSERT INTO user_info (name,email,phone,password)
        VALUES ($1,$2,$3,$4)
        RETURNING *;
        `;
    const data = await client.query(query, valueArray);

    return { success: true, data: data.rows[0] };
  } catch (error) {
    return { success: false, error: error };
  }
};

const deleteUser = async (userId) => {
  try {
    const id = userId;

    const query = `DELETE FROM user_info WHERE id = $1;`;

    const data = await client.query(query, [id]);

    return { success: true, data: data.rows[0] };
  } catch (error) {
    return { success: false, error: error };
  }
};

const fetchUser = async (email) => {
  try {
    let query = `SELECT * FROM user_info WHERE email=$1;`;

    const data = await client.query(query, [email]);

    if (data.rows[0] !== undefined) {
      return { success: true, data: data.rows[0] };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false, error: error };
  }
};

module.exports = { addUser, deleteUser, fetchUser };
