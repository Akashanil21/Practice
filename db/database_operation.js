const client = require("./database");


// add a user to database

const addUser = async (userdata) => {


  try {
    let { first_name, last_name, email, gender, phone } = userdata;
    let valueArray = [first_name,last_name,email,gender,phone]

    let query = `INSERT INTO users (first_name,last_name,email,gender,phone)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
        `;

    const data = await client.query(query,valueArray);
    return { success: true, data: data.rows[0] };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};




// get the details of a specific user


const fetchUser = async (userId) =>{

    try {

        let id = userId

        let query = `SELECT * FROM users WHERE id=$1`

        const data = await client.query(query,[id])

        return {success:true,data:data.rows[0]}

    } catch (error) {
        return {success:false,error:error}
    }
}


// Get all data

const fetchAllData = async() =>{

    try {
        
        const query = `SELECT * FROM users;`

        const data = await client.query(query)

        //console.log("data is : ",data);

        return {success:true,data:data.rows}

    } catch (error) {
        return {success:false,error:error}
    }
}

// Update the details of a user

const updateUser = async(userId,userData) =>{

    try {
        
        let id = userId
        let {first_name,last_name,email,gender,phone} = userData
        let valueArray = [first_name,last_name,email,gender,phone,id]

        let query = `UPDATE users SET 
        first_name = $1,
        last_name = $2,
        email = $3,
        gender = $4,
        phone = $5
    WHERE id =$6
    RETURNING *;
        `

        const data = await client.query(query,valueArray)

        return {success:true,data:data.rows[0]}

    } catch (error) {
        return {success:false,error:error}
    }
}

// Delete a user

const removeUser = async(userId) =>{

    try {
        

        let id = userId

        let query = `DELETE FROM users WHERE id = $1;`

        const data = await client.query(query,[id])

        

        return {success:true,data:data.rows[0]}

    } catch (error) {
        
        return {success:false,error:error}
    }
}

module.exports = {addUser,fetchUser,updateUser,removeUser,fetchAllData};
