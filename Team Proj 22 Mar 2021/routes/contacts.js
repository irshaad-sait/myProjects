// Authors: Irshaad Sardiwalla, Srinivasan Sivalingam, Farid Kassam
//courtesy of Mostafa Mohamed

// Grp1 Team 2
// Date: 23 Mar 2021

//Description: see description for individual routes below

var express = require("express");
var router = express.Router();
const Contact = require("../models/contactMongo");

const pageShowContacts = {
  pagetitle: "Contact us",
};

// Get all contacts page for agencies part
const query = ({});
router.get('/', function(req, res, next) {
    Contact.getContacts(query, (err, agencies)=>{
      if(err) return res.send(err);
      if (agencies) {
        Contact.getAgents({AgencyId:1}, (err, agents1)=>{
          if(err) return res.send(err);
          if (agents1) {
            Contact.getAgents({AgencyId:2}, (err, agents2)=>{
              if(err) return res.send(err);
              if (agents2) {
                console.log(agents2)
                res.render("viewContacts", {...pageShowContacts, contactAgency:agencies, contactAgents1:agents1, contactAgents2: agents2});
              }
            })
            
          }
        })

        
      }
    })
    });


module.exports = router;
