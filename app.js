const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.get("/",(req,res)=>{
    res.send("hello");
})


const PORT = process.env.PORT;
app.listen(PORT,(req,res)=>{
    console.log(`SERVER CONNECTED SUCCESFULLY AT PORT ${PORT}`);
})