// models/studentModel.js
const db = require('./db');

const getStudentInfo = (mssv, mamh, callback) => {
  const query = `
    SELECT diem
    FROM students
    WHERE mssv = ? AND mamh = ?
  `;
  db.query(query, [mssv, mamh], (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      callback(err, null);
      return;
    }
    if (results.length === 0) {
      callback(null, null);
      return;
    }
    callback(null, results[0]);
  });
};

module.exports = { getStudentInfo };
