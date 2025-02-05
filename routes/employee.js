const express = require('express');
const router = express.Router();
const {createEmployee, getLeaveBalance} = require('../Controller/employeeController');
const {createHoliday, getHolidays} = require('../Controller/holidayController');


router.post('/addEmployee', createEmployee); 
router.get('/balance/:employeeId', getLeaveBalance); 
router.post('/addHoliday', createHoliday);
router.get('/holiday/:employeeId/:year', getHolidays);

module.exports=router;