/// Authors: Irshaad Sardiwalla, Srinivasan Sivalingam
//courtesy of Mostafa Mohamed
// Grp1 Team 2
// Date: 19 Mar 2021

//Description: Package Schema format used for database collection packages

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


const packageSchema = new Schema({
  _id: Number,
  PackageId: Number,
  PkgName: String,
  PkgStartDate: Date,
  PkgEndDate: Date,
  PkgDesc: String,
  PkgBasePrice: Number,
  PkgAgencyCommission: Number,
  PkgImg: String,
});

module.exports = mongoose.model("Package", packageSchema);









