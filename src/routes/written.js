var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  let list_C = [{
    "author" : "김마둠",
    "comment" : "글 재밌게 잘봣어요",
    "date" : "2020.04.10",
    "replies": [
      {
        "author" : "박태영",
        "comment" : "좋은 글 감사합니다",
        "date" : "2020.04.26"
      },{
        "author" : "염다미",
        "comment" : "좋아요",
        "date" : "2020.04.27"
      }
    ]
  }, {
    "author" : "김우재",
    "comment" : "쓰레기 같은 글",
    "date" : "2020.04.20",
    "replies" : [
      {
        "author" : "박태영",
        "comment" : "비판 감사합니다",
        "date" : "2020.04.26"
      }
    ]
  }];

    return res.render('written', {
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
        , list_C: list_C
    });
});

module.exports = router;