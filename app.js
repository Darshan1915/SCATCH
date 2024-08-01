const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const connectDB = require('./config/database')
const usersRoute = require('./Routes/usersRoute')
const ownersRoute = require('./Routes/ownersRoute')
const productsRoute = require('./Routes/productsRoute')

app.set('view engine','ejs');
 
app.use("/api/v1/users",usersRoute)
app.use("/api/v1/owners",ownersRoute)
app.use("/api/v1/products",productsRoute)



const PORT =  process.env.PORT || 5000;
app.listen(PORT,(req,res)=>{
    connectDB();
    console.log(PORT);
    console.log(`SERVER CONNECTED SUCCESFULLY AT PORT ${PORT}`);
})