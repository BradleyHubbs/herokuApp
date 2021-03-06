const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors') 
const app = express()
const port = process.env.PORT || 9000 // allows the use of heroku or deployment services env.port
const path = require('path');

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))

app.use("/api/", (_,res)=>{
    res.json({data:"API is accounted for"})
})

app.listen(port,() =>{
    console.log(`Server is alive on port ${port}`)
})


// console.log("It's alive!!");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME); //Mac User
// console.log(process.env.PORT)