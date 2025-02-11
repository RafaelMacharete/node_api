const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 123,
    database: 'people_db'
});

module.exports = mySqlPool;