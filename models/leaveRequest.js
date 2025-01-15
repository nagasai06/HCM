const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
    employeeId: {type: Number, required: true},
    leaveType: {type: String, enum:[annual, sick, casual, unpaid], required: true},
    startDate:{type: Date, required: true},
    endDate: {type: Date, required: true},
    status: {type: String, enum: ['Pending', 'Approved', 'Rejected'], required: true, default: 'Pending'},
    requestedOn: {type: Date, default:Date.now},
    approvedBy: {type: String}

});

module.exports = mongoose.model('leaveRequest', leaveRequestSchema);