const dbConnect = require('./config/db');
dbConnect();

const express = require('express')
const app= express();
const blogRoutes=require('./routes/blogRoutes');


app.use(express.json());
app.listen('3000', ()=>{
    console.log("server connected");
})

app.get('/', (req, res)=>{
    res.send("This is my homepage")    
})

app.use('/blog',blogRoutes);