// Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam
// Grp1 Team 2
// Date: 22 Mar 2021

//Description: see description for individual routes below

var express = require("express");
var router = express.Router();
const { Booking } = require('../models/booking');
// const mongoose = require('mongoose'); //new
// mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));


router.use((req, res, next) => {
  if (!req.user) res.render('pug_index');
  else next();
});

// Get all bookings for logged in customer

router.get('/', function(req, res, next) {
      const query = { userid : req.user.userid };
      Booking.find(query, (err, bookings) => {
        if (err) {
          console.log(err);
          next(err);
        }
  res.render("bookingsview", { allBookings:bookings });
  console.log(bookings)
              })});

//deletes individual booking
router.get('/delete/:id',(req,res)=>{
  console.log('id',req.params.id)
  Booking.findByIdAndRemove(req.params.id,(err,result)=>{
    if (err){console.log(err)}
    console.log(result);
  })
  res.redirect('/viewbookings');
});
    
module.exports = router;
