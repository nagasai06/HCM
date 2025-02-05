const holiday = require('../models/holiday');

const createHoliday = async (req,res) => {
    try {
            const {employeeId, year, holidays} = req.body;
            let holidayRecord = await holiday.findOne({employeeId, year});
            
            if(holidayRecord){
                holidayRecord.holidays = [...new Set([...holidayRecord.holidays, ...holidays])];
                await holidayRecord.save();
            }
            else{
                holidayRecord = await holiday.create({employeeId, year, holidays});
            }
            res.status(200).json({sucess:true, data: holidayRecord});
        }catch(error){
            res.status(500).json({success: false, message: error.message});
        }

};

const getHolidays = async (req,res) =>{
    try{
            const {employeeId, year} = req.params;
            const holidayRecord = await holiday.findOne({employeeId, year});
            if(!holidayRecord){
                return res.status(404).json({success:false, message:'No holiday records found'})
            }
            res.status(200).json({success:true, data: holidayRecord})
    }catch(error){
        res.status(500).json({success:false, message: error.message});

    }
};

module.exports = {createHoliday, getHolidays};