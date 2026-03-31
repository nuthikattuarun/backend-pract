require('dotenv').config();
const express=require('express');
const connectdb=require("./config/db");
const accountRoutes=require('./routes/accountRoutes');
const app = express();

app.use(express.json());


//mongodb connection
connectdb();

//HOME
app.get('/',(req,res)=>{
    res.send('Account CRUD operations is running')
})

app.use("/api/",accountRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server running on port",process.env.PORT)
})