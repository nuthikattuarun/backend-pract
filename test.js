require('dotenv').config();
const express = require('express');
const connectdb = require("./config/db");
const accountRoutes = require('./routes/accountRoutes');
const infoRoutes = require('./routes/info');
const app = express();

app.use(express.json());


//mongodb connection
connectdb();

//HOME
app.get('/',(req,res)=>{
    res.json({
        message:"Account crude operations is running" ,
        status:"success"
    })
})

app.use("/api/",accountRoutes);

app.use("/",infoRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server running on port",process.env.PORT)
})