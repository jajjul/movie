var express = require('express');
var router = express.Router();

/* index.ejs <form action="movies"> */
router.get('/', function (req, res, next) {
  res.render('movie', {
    list: [
      {
        id: 1,
        name: "abc"
      },
      {
        id: 2,
        name: "abc"
      },
      {
        id: 3,
        name: "abc"
      }
    ]
  });
});

module.exports = router;
