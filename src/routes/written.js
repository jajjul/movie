var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('written', {
      title: '영화토크방', list: [{
        type: "리뷰",
        contentTitle: "국제시장 리뷰",
        commentCount: "1",
        author: "박태영",
        date: "2020.04.13",
        voteCount: "25"
      }, {
        type: "자유",
        contentTitle: "박태영 잘생겼음",
        commentCount: "3",
        author: "김마둠",
        date: "2020.04.13",
        voteCount: "0"
      }, {
        type: "미국 영화",
        contentTitle: "미국영화 하나 추천함",
        commentCount: "2",
        author: "염다미",
        date: "2020.04.13",
        voteCount: "10"
        }]
        , list_R: [{
          in_reply_author: "박태영",
          in_reply_comment : "좋은 글 감사합니다.",
          in_reply_date: "2020.04.19"
        }, {
          in_reply_author: "염다미",
          in_reply_comment : "사랑해",
          in_reply_date: "2020.04.19"
        }]
    });
});

module.exports = router;