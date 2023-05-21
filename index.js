
const express = require("express");
const mongoose = require("mongoose");
const port=process.env.port||8080;
var app = express();
const url = "mongodb://127.0.0.1:27017/todaydb";
const bodyParser=require("body-parser")
var app = express();
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(() => {
  console.log("connected ok");
}).catch((e) => {
  console.log("connected not ok" + e);
})
var db= mongoose.connection;
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended:true
}))




app.post(
  "/sign_up",(req,res)=>{
var name=req.body.name;
var email=req.body.email;
var password=req.body.password;
var data={
  "name":name,
  "email":email,
  "password":password
}
db.collection('users').insertOne(data,(err,collection)=>{
  if (err) throw err;
      console.log("Record inserted Successfully");
});
return res.redirect('Home.html')

}

)
app.get("/",(req,res)=>{
res.set({
  'Access-control-Allow-Origin': '*'
})
return  res.redirect('register.html');
}).listen(port)

console.log('server listing at port :'+port);


