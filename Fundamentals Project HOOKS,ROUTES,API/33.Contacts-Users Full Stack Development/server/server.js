const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");

const cors = require('cors')
const app = express();

app.use(cors())

dotenv.config({path:'./config/config.env'});
connectDatabase()

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})