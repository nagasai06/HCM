require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employee');
require('./cron/leaveAccrual');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/employees', employeeRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Employee leave and holiday Management API');
});
app.listen(3000, () => {
    console.log('server running');
});