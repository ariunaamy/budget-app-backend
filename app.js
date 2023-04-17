const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

console.log("Welcome")
app.get("/", (req,res)=>{
    res.send("Welcome to Budget App!")
})

module.exports = app; 