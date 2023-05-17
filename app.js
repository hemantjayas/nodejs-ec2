const express = require("express");
const  mongoose = require("mongoose");
const PORT = 8000;
const app = express();

const connect = ()=>{
    console.log("database connected")
    return mongoose.connect("mongodb+srv://hemantjayas03:hem123@cluster0.xepnwbp.mongodb.net/")
}




app.get("/", (req,res)=>{
    res.json({name:"working get req"})
})

app.use(express.json())

app.listen(PORT, async function () {
    await connect()
    
    console.log(`listening on port ${PORT}`)
});