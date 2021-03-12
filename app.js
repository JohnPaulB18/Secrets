//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs', 'html');
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

var userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

var secret = "Thisisourlittlesecret.";
userSchema.plugin(encrypt, {secret: secret, encryptedFields:['password']});


const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res){
  res.render("home");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.post("/register", function(req, res){
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err){
    if(err){
      console.log(err);
    } else {
      res.render("secrets");
    }
  });
});

app.post("/login", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email: username}, function(err, foundUser){
    if(err){
      console.log(err);
    } else {
      if(foundUser){
        if(foundUser.password === password){
          res.render("secrets");
        }
      }
    }
  });
});

app.get('/logout', function(req, res) {
  res.render("home");
});

app.get('/sell', function(req, res) {
  res.sendFile(__dirname + "/public" + "/sell.html");
});

app.get('/buyCar', function(req, res) {
  res.sendFile(__dirname + "/public" + "/buyCar.html");
});

app.get("/buyBike", function(req, res){
  res.sendFile(__dirname + "/public" + "/buyBike.html")
})

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + "/public" + "/contact.html");
});

app.get('/terms-and-conditions', function(req, res) {
  res.sendFile(__dirname + "/public" + "/terms-and-conditions.html");
});

app.get('/policy', function(req, res) {
  res.sendFile(__dirname + "/public" + "/policy.html");
});

app.get('/secrets', function(req, res) {
  res.render("secrets");
});

app.get('/Benz', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Benz.html");
});

app.get('/Audi', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Audi.html");
});

app.get('/BMW', function(req, res) {
  res.sendFile(__dirname + "/public" + "/BMW.html");
});

app.get('/Ford', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Ford.html");
});

app.get('/Honda', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Honda.html");
});

app.get('/Hyundai', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Hyundai.html");
});

app.get('/Jeep', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Jeep.html");
});

app.get('/Kia', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Kia.html");
});

app.get('/Mahindra', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Mahindra.html");
});

app.get('/Maruthi', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Maruthi.html");
});

app.get('/MG', function(req, res) {
  res.sendFile(__dirname + "/public" + "/MG.html");
});

app.get('/Nissan', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Nissan.html");
});

app.get('/Renault', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Renault.html");
});

app.get('/Skoda', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Skoda.html");
});

app.get('/Tata', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Tata.html");
});

app.get('/Toyota', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Toyota.html");
});

app.get('/Volkeswagen', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Volkeswagen.html");
});

app.get('/Volvo', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Volvo.html");
});

app.get('/aprilia', function(req, res) {
  res.sendFile(__dirname + "/public" + "/aprilia.html");
});

app.get('/bajaj', function(req, res) {
  res.sendFile(__dirname + "/public" + "/bajaj.html");
});

app.get('/BMW_bike', function(req, res) {
  res.sendFile(__dirname + "/public" + "/BMW_bike.html");
});

app.get('/ducati', function(req, res) {
  res.sendFile(__dirname + "/public" + "/ducati.html");
});

app.get('/harley_davidson', function(req, res) {
  res.sendFile(__dirname + "/public" + "/harley_davidson.html");
});

app.get('/hero', function(req, res) {
  res.sendFile(__dirname + "/public" + "/hero.html");
});

app.get('/honda_bike', function(req, res) {
  res.sendFile(__dirname + "/public" + "/honda_bike.html");
});

app.get('/jawa', function(req, res) {
  res.sendFile(__dirname + "/public" + "/jawa.html");
});

app.get('/kawasaki', function(req, res) {
  res.sendFile(__dirname + "/public" + "/kawasaki.html");
});

app.get('/ktm', function(req, res) {
  res.sendFile(__dirname + "/public" + "/ktm.html");
});

app.get('/mahindra_bike', function(req, res) {
  res.sendFile(__dirname + "/public" + "/mahindra_bike.html");
});

app.get('/royal_enfield', function(req, res) {
  res.sendFile(__dirname + "/public" + "/royal_enfield.html");
});

app.get('/triumph', function(req, res) {
  res.sendFile(__dirname + "/public" + "/triumph.html");
});

app.get('/tvs', function(req, res) {
  res.sendFile(__dirname + "/public" + "/tvs.html");
});

app.get('/yamaha', function(req, res) {
  res.sendFile(__dirname + "/public" + "/yamaha.html");
});

app.get('/checkout', function(req, res) {
  res.sendFile(__dirname + "/public" + "/checkout.html");
});

app.get('/booking', function(req, res) {
  res.sendFile(__dirname + "/public" + "/booking.html");
});

app.get('/feedback', function(req, res) {
  res.sendFile(__dirname + "/public" + "/feedback.html");
});

app.get('/service', function(req, res) {
  res.sendFile(__dirname + "/public" + "/service.html");
});

app.get('/accessories', function(req, res) {
  res.sendFile(__dirname + "/public" + "/accessories.html");
});

app.get('/recom', function(req, res) {
  res.sendFile(__dirname + "/public" + "/recom.html");
});

app.get('/Convertible', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Convertible.html");
});

app.get('/Coupe', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Coupe.html");
});

app.get('/Hatchback', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Hatchback.html");
});

app.get('/Minivan', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Minivan.html");
});

app.get('/Sedan', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Sedan.html");
});

app.get('/SUV', function(req, res) {
  res.sendFile(__dirname + "/public" + "/SUV.html");
});

app.get('/Sportscar', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Sportscar.html");
});

app.get('/Station', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Station.html");
});

app.get('/Cafe-Racer', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Cafe-Racer.html");
});

app.get('/Commuter', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Commuter.html");
});

app.get('/Cruiser', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Cruiser.html");
});

app.get('/Dirt', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Dirt.html");
});

app.get('/Moped', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Moped.html");
});

app.get('/Sportsbike', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Sportsbike.html");
});

app.get('/Standard', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Standard.html");
});

app.get('/Super', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Super.html");
});

app.get('/Tourer', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Tourer.html");
});

app.get('/Adventure', function(req, res) {
  res.sendFile(__dirname + "/public" + "/Adventure.html");
});

app.listen(3000, function() {
  console.log("Server started running on port 3000.")
})
