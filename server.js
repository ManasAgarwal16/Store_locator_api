const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// load env vars

dotenv.config({path: './config/config.env'});


const app = express();

//Body Parser
app.use(express.json());

//Enable Cors
app.use(cors());

// static folder

app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/api/v1/stores', require('./routes/stores'));



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));