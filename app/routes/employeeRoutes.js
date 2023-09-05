const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController');

router.post('/employees', EmployeeController.createEmployee);
router.get('/employees', EmployeeController.getAllEmployees);

module.exports = router;