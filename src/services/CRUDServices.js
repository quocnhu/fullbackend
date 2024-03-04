const pool = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await pool.query(`SELECT * FROM users`)
    return results; // return to his parent to use
}

const getUserId = async (userId) => {
    let [results, fields] = await pool.query(` SELECT * FROM users where id = ?`,[userId]) 
    let user = results && results.length > 0 ? results[0] : {};
    return user; //return to update page
}
const updateUserId = async(name,email,city,id) => {
    let [results, fields] = await pool.query (`
    UPDATE users SET name = ?, email = ?, city = ?
    WHERE id = ?`,[name,email,city,id]); //OMG --> i made a mistake when i put id at the first position
}
module.exports = {
    getAllUsers,
    getUserId,
    updateUserId
}