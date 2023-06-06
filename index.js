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

// Use body-parser to parse form data
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

app.get("/Homev2", function (req, res) {
  res.render("Homev2");
});

app.get("/Challenges", async function (req, res) {
  try {
    const users = await User.find({});
    const userChallenges = users.flatMap((user) => user.challenges);

    res.render("Challenges", { userChallenges: userChallenges });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving challenges');
  }
});

app.get("/TODO", function (req, res) {
  res.render("TODO");
});

app.post("/send-task", (req, res) => {
 
  fs.writeFile('public/challenge.txt', req.body.name +"\n" + req.body.date + "\n" + req.body.task +"\n end challenge", (err) => {

    if (err) throw err;

    else{

       console.log("The file is updated with the given data")

    }

 })

});

app.post('/register', (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
  });

  user.save()
    .then(() => {
      res.render('Homev2', { user: user });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error registering user');
    });
});

app.get("/login", function (req, res) {
  res.render("login");
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

    res.render('Homev2');

   

    })

    .catch((err) => {

      console.error(err);

      res.status(500).send('Error logging in');

    });

  });

app.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});



app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
