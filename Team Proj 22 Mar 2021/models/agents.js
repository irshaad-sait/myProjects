// Authors: Farid Kassam, Srinivasan Sivalingam
// Grp1 Team 2
// Date: 19 Mar 2021

//Description: Create a model Agents using the agentSchema

const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const agentSchema = new mongoose.Schema(
   {
  _Id: {
     type: Number,
     trim: true,
    },
  AgentId: {
     type: Number,
     trim: true,
  },
  AgtFirstName: {
     type: String,
     trim: true
  },

  AgtLastName: {
     type: String,
     trim: true
  },
  AgtBusPhone: {
     type: String,
     trim: true
  },
  AgtEmail: {
     type: String,
     trim: true
  },

 });

agentSchema.plugin(uniqueValidator);
// Create a model User using the userSchema
module.exports = mongoose.model('Agent', agentSchema);    