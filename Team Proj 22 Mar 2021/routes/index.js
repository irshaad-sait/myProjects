// Authors: Shefqet Zyko
// Grp1 Team 2
// Date: 24 Mar 2021

/*Express is a routing and middleware web framework that 
has minimal functionality of its own: An Express application is 
essentially a series of middleware function calls.

Middleware functions are functions that have access to the request 
object (req), the response object (res), and the next middleware function in the application’s 
request-response cycle. The next middleware function is commonly denoted by a variable named next.*/
var express = require('express');
var router = express.Router();

/* GET home page. */
//Action of router is to render the (Home Page) front end view through pug template. Reference app.js line 49.
// in general a router request needs a path and a callback function router.method('relative url', callback). 
//usually the response of the callback is associated with some action to perform; this is usually used to render a page.


router.get('/', function(req, res, next) {
  //res. is usually associated with res.send, res.render and res.redirect
  //https://expressjs.com/en/guide/using-middleware.html
  res.render('pug_index');
});

/*
broken the code up into seperate pages to make the program more legible and easy to follow.
to make code on a particular page accessible to other pages use module.exports.
To call it from another page, use require('relative path')
router - all logic required to map. If you remove this statement, the module will fail.
*/
module.exports = router;
