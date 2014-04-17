var express = require('express');
var router = express.Router();

/* GET terms page. */
router.get('/terms', function(req, res) {
  res.render('terms');
});

module.exports = router;
