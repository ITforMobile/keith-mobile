var express = require('express');
var router = express.Router();

/* GET contact us page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});

module.exports = router;