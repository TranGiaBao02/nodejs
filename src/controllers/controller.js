const studentModel = require('../models/model');

const getStudentInfo = (req, res) => {
  const { mssv, mamh } = req.query;
  studentModel.getStudentInfo(mssv, mamh, (err, result) => {
    if (err) {
      console.error('Error in getStudentInfo:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (!result) {
      res.status(404).json({ error: 'Student not found for the given course' });
      return;
    }
    res.status(200).json({ diem: result.diem });
  });
};

module.exports = { getStudentInfo };