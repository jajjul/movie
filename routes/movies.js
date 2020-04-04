var express = require('express');
var router = express.Router();

/* GET boards listing. */
router.get('/', function(req, res, next) {
  let search = req.query.search;
  let target = req.query.target;
  res.render('movie', { search: search, target: target });
});

module.exports = router;
