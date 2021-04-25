// Authors:  Irshaad Sardiwalla, Srinivasan Sivalingam

// Grp1 Team 2
// Date: 20 Mar 2021

//Description: see description for individual routes below

var express = require("express");
var router = express.Router();
const Package = require("../models/packages");

// moved to app.js lines 13-18
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

const query = {};
//split out function from callback request on router.get("/", findPackage);
//function was split out to aid understanding of callbacks
function findPackage (req, res, next) {
  /*
  Creates a find query: gets a list of documents that match filter. Result is stored in
  myDocs(free to choose nave of parameter). If you want to view content of myDocs, console.log(myDocs); result will be shown in terminal.
  */
  Package.find(query, (err, myDocs) => {
    if (err) return res.send(err);
    if (myDocs) {
      res.render("mypackages", { data: myDocs });
    }

  });
  

};

/* GET package page. */
router.get("/", findPackage);

router.post("/request", function (req, res, next) {
  res.send(req.body);
});

module.exports = router;

