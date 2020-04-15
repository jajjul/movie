var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('join', {title: '회원가입'});
});

module.exports = router;