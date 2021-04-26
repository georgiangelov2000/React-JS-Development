const express = require('express');
const bodyParser = require('body-parser');
const dotenv=require('dotenv');
const connectDatabase=require('./config/database');
const cors = require('cors')
const app = express();

app.use(cors())

dotenv.config({path:'./config/config.env'});
connectDatabase()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router=require('./routes/crud');
app.use(router)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})