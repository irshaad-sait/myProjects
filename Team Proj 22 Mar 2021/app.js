//Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam
// Grp1 Team 2
// Date: 19 Mar 2021

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');

/*
connection to mongoose is required once only. We chose to place it in app.js
*/
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//Applies to indexRouter:line 14 calls the router variable that was exported on line 33 (reference routes: index.js)
//assigned the value from the export to a new varaible indexRouter. Similar explanation applies to other routes and associated pugs.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogRouter = require('./routes/posts');
const packageRouter = require('./routes/package');
const contactRouter = require("./routes/contacts")
const orderRouter = require('./routes/book');
const orderSumRouter = require('./routes/ordersSum'); //new

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Express Mongoose Sanitize
// Replace any prohibited characters in keys
// https://www.npmjs.com/package/express-mongo-sanitize
// Or, to replace prohibited characters with _, use:
app.use(mongoSanitize({
  replaceWith: '_'
}));

// For Passport.js
/*
init allows for the content in my-passport.js to be execute before the remaining code in app.js gets executed.
i.e. code following call
---------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
*/
require("./my-passport").init(app);

// -------------------------------------------------------------

app.use(express.static(path.join(__dirname, 'public')));


//This section calls the appropriate router based on the url called by the browser. For example, 
//if index page is called, then router that handles the call is the indexRouter.
//Note: purpose of router is to execute some actionable JavaScript once the call is received.
/* note that no path for /login exists here. The handle for this path is contained in my-passport.js and is called in app.js
---------------
"called from app.js"
For Passport.js
require("./my-passport").init(app);
--------------------
*/


app.use('/', indexRouter);
app.use('/register', usersRouter);
app.use('/blogs', blogRouter);
app.use('/packages', packageRouter)
//app.use("/conapp.use('/ordersSum', orderSumRouter); //newtacts", contactRouter);
app.use('/book', orderRouter);
app.use('/contacts', contactRouter);
app.use('/viewbookings', orderSumRouter); //new


 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//farid