const dbConnect = require('./config/db');
dbConnect();

const express = require('express')
const app= express();

app.listen('3000', ()=>{
    console.log("server connected");
})

app.get('/', (req, res)=>{
    res.send("This is my homepage")    
})
