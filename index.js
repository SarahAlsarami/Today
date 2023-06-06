const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const fs = require('fs')


const app = express();
const url = "mongodb+srv://projrcttoday:123456789010@webproject.ipyi8hd.mongodb.net/";
var port = process.env.PORT || 8080;
const session = require('express-session');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));

mongoose.connect(url, { useNewUrlParser: true });

const Challenge = require('./models/Challenge');
const User = require('./models/User');


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", function (req, res) {
  res.render("register");
});
app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/OldHome", function (req, res) {
  res.render("OldHome");
});



app.get("/Challenges", function (req, res) {
 res.render("Challenges")
});

app.get("/TODO", function (req, res) {
  res.render("TODO");
});
app.get("/login", function (req, res) {
  res.render("login");
});




app.post('/register', (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
  });

  user.save()
    .then(() => {
      
      fs.writeFile('public/user.txt', user.name, (err) => {

        if (err) throw err;

        else{

           console.log("The file is updated with the given data")

        }

     })
      res.render('OldHome');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error registering user');
    });
});

app.post('/login', (req, res,) => {

 

  User.findOne({ email: req.body.email, password: req.body.password })

    .then((user) => {

      if (!user) {

        return res.status(401).send('<script>alert("the email or password are not correct");</script>');

      }


      fs.writeFile('public/user.txt', user.name, (err) => {

        if (err) throw err;

        else{

           console.log("The file is updated with the given data")

        }

     })

    res.render('OldHome');

   



    }).catch((err) => {

      console.error(err);

      res.status(500).send('Error logging in');

    });

  });


  app.post("/writefile",(req,res)=>{
    fs.writeFile('public/task.txt', req.body.singltask , (err) => {
  
      if (err) throw err;
      else{
         console.log("The file is updated with the given data"+req.body.singltask)
         const message = 'Aded task succsfully!';
         res.render('OldHome', { message });
  
      }
  
  })});
  

app.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});



app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
