const express = require("express");
const transactionsArray = require("../models/transactions")
// const bodyParser = require("body-parser");
 const transactions = express.Router();
// const TrsArray = require("../models/Tr.js");

transactions.get("/", (req, res) => { 
    res.send(transactionsArray);
  });

transactions.get("/:index", (req, res)=>{
  const {index} = req.params;
  if(!transactionsArray[index]){
    res.status(404).json({error: "invalid index"})
  }else{
    res.send(transactionsArray[index])  
  }
})

transactions.post("/", (req, res) =>{
    console.log(req.body)
    transactionsArray.push(req.body); 
    res.status(201).json(transactionsArray[transactionsArray.length-1])
})

transactions.delete("/:index", (req, res)=>{
    const {index} = req.params;
    if (!transactionsArray[index]) {
      res.status(404).json({error: "invalid index"});
    }else{
      transactionsArray.splice(index,1);
      res.status(204).json(transactionsArray); 
    }  
})

transactions.put("/:index", (req, res) => {
    const {index} = req.params;
    if (!transactionsArray[index]) {
      res.status(404).json({error: "invalid index"});
    } else {
      transactionsArray[index] = req.body;
      res.json(transactionsArray[index]);
    }
  });

  module.exports = transactions;