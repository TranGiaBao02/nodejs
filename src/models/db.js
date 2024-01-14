// models/db.js
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'studentdb',
});

module.exports = pool;
