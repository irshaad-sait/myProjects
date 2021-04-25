// Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam
//courtesy of Mostafa Mohamed

// Grp1 Team 2
// Date: 22 Mar 2021

//Description: see description for individual routes below

var express = require('express');
var router = express.Router();
const {User} = require('../models/user');
const bcrypt = require("bcryptjs");

const pageRegister = {
  pagetitle:'Sign-Up',
  pageheading:'Create a new account',
  pagemessage:'Please enter the required information to create a new account.'};


/* Sign-up page. */
router.get('/', function(req, res, next) {
  res.render('sign-up');
});


router.post('/', function(req, res, next) {
    bcrypt.hash(req.body.passwd, 10, (err, hashedPassword) => {
        if(err) throw err;
        // Replace the plain password with the hashed password
        req.body.passwd = hashedPassword;
        // Create a new user object from the User Model
        const user = new User(req.body);
        console.log(req.body);        
        // Store the user object in the DB
        user.save((err, result)=> {
            if(err) // If there are errors from the Model schema
            {   const errorArray = [];
                const errorKeys = Object.keys(err.errors);
                console.log(err);
                errorKeys.forEach(key => errorArray.push(err.errors[key].message));
                return res.render("sign-up", 
                { ...pageRegister,
                    errors: errorArray,
                    ...req.body,
                });     
            }
            const headermessage = `Account created ${result.CustFirstName}`;
            res.redirect('/?headermessage=' + headermessage);
            
        }) 
    })
});

module.exports.passport = null;
module.exports = router;