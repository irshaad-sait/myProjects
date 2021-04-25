// Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam
//courtesy of Mostafa Mohamed

// Grp1 Team 2
// Date: 19 Mar 2021

//Description: User Schema format used for database collection users

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// mongoose.connect(process.env.DB_HOST,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));


const userSchema = new mongoose.Schema({
  passwd: {
    type: String,
    required: "Please enter a password",
    trim: true,
    validate: {
      validator: function (v) {
        return /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{6,}$/.test(
          v
        );
      },
      message: (props) =>
        `Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 6 characters.`,
    },
  },
  CustomerId: {
    type: Number,
    trim: true,
  },
  CustFirstName: {
    type: String,
    trim: true,
  },

  CustLastName: {
    type: String,
    trim: true,
  },
  CustAddress: {
    type: String,
    trim: true,
  },
  CustCity: {
    type: String,
    trim: true,
  },
  CustProv: {
    type: String,
    trim: true,
  },
  CustPostal: {
    type: String,
    trim: true,
  },
  CustCountry: {
    type: String,
    trim: true,
  },
  CustHomePhone: {
    type: String,
    trim: true,
  },
  CustBusPhone: {
    type: String,
    trim: true,
  },
  CustEmail: {
    type: String,
    trim: true,
  },
  AgentId: {
    type: Number,
    trim: true,
  },
  userid: {
    type: String,
    trim: true,
    unique: "The username must be unique.",
  },
});

userSchema.plugin(uniqueValidator);
// Create a model User using the userSchema
module.exports.User = mongoose.model("User", userSchema);
