var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { 
      title: 'Orders',
      subtitle: 'Incoming Orders'
    }
  );
});

module.exports = router;
