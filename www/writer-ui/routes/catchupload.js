// 
//  uploadorder.js
//  ~/routes/
// 
//  created:    2021-02-06
// 
//  upload-order route
// 
'use strict';

var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

/* GET users listing. */
router.post('/', upload.single('fileupload'), function (req, res, next) {   //function(req, res, next) {
  
  const file = req.file;
  const typeofval = (typeof file);
  const filename = file.originalname;
  const content = file.buffer.toString();

  res.render('catchupload', 
    { 
      filename: filename,
      filetype: typeofval, 
      filecontent: content, 
      title: 'Import Order',
      subtitle: 'Upload Import Data'
    }
  );
});
module.exports = router;




// module.exports = router;
// 
//  uploadorder.js
//  ~/routes/
// 
//  created:    2021-02-06
// 
//  upload-orer route
// 
// 'use strict';

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('catchupload', 
//     { 
//       title: 'Import Order',
//       subtitle: 'Upload Import Data'
//     }
//   );
// });
// module.exports = router;


// 
//  uploadorder.js
//  ~/routes/
// 
//  created:    2021-02-07
// 
//  upload-orer file catcher route
// 
// 'use strict';
// const express = require('express')
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

// const app = express()
// let typeofval = '';
// app.post('/profile', upload.single('fileupload'), function (req, res, next) {

//     const file = req.file;
//     typeofval = (typeof file);
// })

//var express = require('express')
// const app = express()
// var multer  = require('multer')
//var upload = multer()
 
// app.post('/profile', upload.none(), function (req, res, next) {
//   // req.body contains the text fields
// })



// // render
// // var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('caughtupload', 
//     { 
//       filetype: typeofval,
//       title: 'Import Order',
//       subtitle: 'Upload Import Data'
//     }
//   );
// });
// module.exports = router;

