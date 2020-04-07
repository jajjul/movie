var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('written', {title: '글제목'});
});

module.exports = router;