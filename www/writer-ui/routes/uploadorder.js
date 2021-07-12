// 
//  uploadorder.js
//  ~/routes/
// 
//  created:    2021-02-06
// 
//  upload-orer route
// 
'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('uploadorder', 
    { 
      title: 'Import Order',
      subtitle: 'Upload Import Data'
    }
  );
});
module.exports = router;
