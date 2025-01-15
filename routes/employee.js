const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

router.post('/', async(req,res) => {
try{
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: 'Error adding employee', error });
  }

});
router.get('/balance/:employeeId', async (req,res) => {
try{
    const employee = await Employee.findOne({employeeId: req.params.employeeId});
    if(!employee)
        return res.status(400).json({message: "Employee Not FOund"});
    res.json(employee.leaveBalance);
}
catch (error){
    res.status(500).json({message:'Oops! Internal server error', error});
}
});

module.exports=router;