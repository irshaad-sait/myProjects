// getting-started.js
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





