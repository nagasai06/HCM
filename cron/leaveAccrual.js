const cron = require('node-cron');
const Employee = require('../models/employee');

cron.schedule('0 0 1 * *',async () =>{
console.log('Running monthly leave accrual');
try{
    const employees = await Employee.find({});
    for (let employee of employees)
    {
        employee.leaveBalance.casual += employee.monthlyAccrual.casual;
        employee.leaveBalance.unpaid += employee.monthlyAccrual.unpaid;
        await employee.save(); 
    }
}
catch (error){
    console.error('error in monthly leave accrual cron',error);
}

});

cron.schedule('0 0 1 1 *',async () => {
try{
    const employees = await Employee.find({});
    for (let employee of employees){
        employee.leaveBalance.annual += employee.annualAccrual.annual;
        await employee.save();
    }
    console.log('annual leave accrual successful');
}
catch(error){
    console.error('Error running annual leave accrual cron', error);
}
});