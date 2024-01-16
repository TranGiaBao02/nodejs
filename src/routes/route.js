const express = require('express');
const router = express.Router();
const studentController = require('../controllers/controller');

router.get('/api/student', studentController.getStudentInfo);

module.exports = router;
