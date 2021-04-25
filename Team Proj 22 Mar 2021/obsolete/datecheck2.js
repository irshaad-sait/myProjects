var express = require('express');
var router = express.Router();
const packages = require('../models/packages');
var today=new Date();
        
        
 packages.getPackages(query, (err, resd)=>{
            if(err) return res.send(err);
            if (resd) {
             console.log(resd);
             if (resd[0].PkgStartDate < today){document.getElementById('package1').style="color:red";}
            }
          });