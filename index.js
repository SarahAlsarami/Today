const e = require("express");
const express = require("express");
const mongoose = require("mongoose");
const url="mongodb://127.0.0.1:27017/todaydb"
const port=3000;
const app = express();


mongoose.connect(url,{}).then(result=>console.log("connected db")).catch(e=>console.log(e))
app.get('/',(req,res)=>{
  res.send("<h1>hello from node js app </h1>")
})
app.listen(port,()=>{
  console.log("server conected at port:  "+port)
})
