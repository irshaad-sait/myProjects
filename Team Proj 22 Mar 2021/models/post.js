// Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam
//courtesy of Mostafa Mohamed
// Grp1 Team 2
// Date: 19 Mar 2021

//Description: Post Schema format used for database collection posts

const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
// mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

const postSchema = new mongoose.Schema({
      post: {
        type: String,
        required: 'The post field is required',
        trim: true
      },
     title: {
        type: String,
        required: 'The title field is required',
        trim: true
     },
     author: {
        type: String,
        required: 'The author field is required',
        trim: true
     },
     blogdate: {
        type: String,
        required: 'The date field is required',
        trim: true
     },
     url: {
        type: String,
        required: 'The url slug field is required',
        trim: true,
        unique: 'The URL Slug should be unique.',
        validate: {
            validator: function(v) {
                return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
              },
              message: props => `${props.value} is not a valid URL slug.`
            }      
     }
    });


postSchema.plugin(uniqueValidator);
module.exports.Post = mongoose.model('Posts', postSchema);
