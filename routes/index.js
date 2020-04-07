var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: '영화토크방', list: [{
      author: "박태영",
      name: "국제시장"
    }, {
      author: "박태영",
      name: "국제시장"
    }, {
      author: "박태영",
      name: "국제시장"
    }]
  });
});

router.get('/:category', function (req, res, next) {
  let category = req.params.category;
  res.render('index', {
    title: '영화토크방', list: [{
      author: "박태영",
      name: "국제시장"
    }, {
      author: "박태영",
      name: "국제시장"
    }, {
      author: "박태영",
      name: "국제시장"
    }]
  });
});

module.exports = router;
