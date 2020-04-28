var express = require('express');
var router = express.Router();
const pool = require('../database/pool')

router.get('/', function (req, res, next) {
    res.render('login', {title: '로그인'});
});

router.post('/', async (req, res, next) => {
    let {userId, userPwd} = req.body;
    console.log('로그인정보');
    console.log(userId);
    console.log(userPwd);
  });

module.exports = router;