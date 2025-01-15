const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    employeeId: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    role: {type: String, enum: ['Employee', 'Manager', 'HR', 'Admin'], default: 'Employee'},
    leaveBalance: 
    {
        annual: {type: Number, default:0 },
        sick: {type: Number, default:4 },
        casual: {type: Number, default: 0},
        unpaid: {type: Number, default:0}

    },
    monthlyAccrual:
    {
        casual: {type: Number, default: 1},
        unpaid: {type: Number, default:1}
    },
    annualAccrual:
    {
        annual: {type: Number, default: 1}
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema)