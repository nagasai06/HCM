const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    employeeId: {type: Number, ref: 'Employee', required: true},
    year: { type: Number, required: true},
    holidays: [{type: Date, required: true}]

});

module.exports = mongoose.model('holiday', holidaySchema);