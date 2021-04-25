// Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam
//courtesy of Mostafa Mohamed

// Grp1 Team 2
// Date: 21 Mar 2021

//Description: see description for individual routes below

var express = require("express");
var router = express.Router();
const { Post } = require("../models/post");
console.log(Post);
const pageCreatePost = {
  pagetitle: "Blog post",
  pageheading: "Create a new post",
  pagemessage: "This is where you can create a new post.",
};
const pageShowPosts = {
  pagetitle: "Blog posts",
  pageheading: "A collection of all blog posts.",
  pagemessage: "Write your own inspiring tale to capture the memories of past travels.",
};


// middleware that is specific to this router,
// checks that the user must be logged in
router.use((req, res, next) => {
  if (!req.user) res.render('pug_index');
  else next();
});

/* GET Post create page. */
//next is optional but req,res is required.
router.get("/", function (req,res,next) {
  res.render("myNewBlog", pageCreatePost);
});

router.post("/", function (req, res, next) {
  const myPost = new Post(req.body);
  console.log(req.body);
 
  myPost.save((err, result) => {
    if (err) {
      //res.send(err);
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("myNewBlog", {
        ...pageCreatePost,
        errors: errorArray,
        title: req.body.title,
        url: req.body.url,
        post: req.body.post,
      });
    }
    console.log(`<h2>Data saved: ${result.title}</h2>`);
    res.redirect('blogs/all')
  });
});

// Get all posts page
router.get("/all", function (req, res, next) {
  Post.find((err, posts) => {
    res.render("viewAllBlogs", { ...pageShowPosts, blogPosts: posts });
  });
});

//deletes individual booking
router.get('/all/delete/:id',(req,res)=>{
  console.log('id',req.params.id)
  Post.findByIdAndRemove(req.params.id,(err,result)=>{
    if (err){console.log(err)}
    console.log(result);
  })
  res.redirect('/blogs/all');
});

module.exports = router;
