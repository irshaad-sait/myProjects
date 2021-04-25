// Authors: Irshaad Sardiwalla, Srinivasan Sivalingam

// Grp1 Team 2
// Date: 19 Mar 2021

//Description: see description for individual routes below

var express = require('express');
var router = express.Router();
const { Booking } = require('../models/booking');

const Contact = require("../models/contactMongo");
const query = ({});
const Package = require("../models/packages");//added by Irshaad 24 Mar 2021
const Agent = require("../models/agents")
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));


const pageRegister = {
  pagetitle:'Sign-Up',
  pageheading:'Create a new account',
  pagemessage:'Please enter the required information to create a new account.'};

router.use((req, res, next) => {
  if (!req.user) res.render('pug_index');
  else next();
});


  //looks up package and agent information from Mongo and displays it on pug view. Math fn() assigns random agent to booking
  router.get("/:pkgId", function (req, res, next) {
    const pkgId = req.params.pkgId;
    const query = { PackageId : pkgId };
    Package.findOne(query, (err, package) => {
      if (err) {
        console.log(err);
        next(err);
      }
      console.log(package);
      Agent.findOne({AgentId:Math.floor(Math.random()*9)+1}, (err, agent)=>{
        if (err) {
          console.log(err);
          next(err);
        }
    //render method requires a string as the first parameter (this is the name of your file), and as an option you can pass an object
    //to the pug page as a second parameter. Note this second paramete must be an object type. e.g. if you have an array,
    // use { key(name): array }, as parameter. When using find method to read from mongoose, the result will be an array of objects.
        res.render("newbooking",{ package, agent });
      })
    });
  });

  //recieves data from the newbooking pug page form and writes to Mongo Atlas booking collection
  router.post("/:pkgId", function (req, res, next) {
      const booking = new Booking({ userid: req.user.userid,
                                    BookingId:Math.floor(Math.random()*100)+1,
                                    BookingCost: req.body.packageCost*parseInt(req.body.inlineRadioOptions),
                                    BookingDate: new Date(), 
                                    TravelerCount: req.body.inlineRadioOptions, 
                                    PackageId: parseInt(req.body.PackageId) }); 
      booking.save((err, result)=> {
        if(err) // If there are errors from the Model schema
        {   const errorArray = [];
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => errorArray.push(err.errors[key].message));
            return res.render("sign-up", 
            { ...pageRegister,
                errors: errorArray,
                ...req.body,
            });     
        }
        console.log(result.BookingDate)  
        res.render('thankyou',{data:result.BookingDate})
        });
      });


module.exports = router;
