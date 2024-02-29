const pool = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await pool.query(`SELECT * FROM users`)
    return results; // return to his parent to use
}

module.exports = {
    getAllUsers,
}