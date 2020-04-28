var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let comments = [
    {
      "title": "댓글1",
      "content": "내용1",
      "replies" : [
        {
          "title": "답글1",
          "content": "내용1"
        },{
          "title": "답글2",
          "content": "내용2"
        },{
          "title": "답글3",
          "content": "내용3"
        }
      ]
    },
    {
      "title": "댓글2",
      "content": "내용2",
      "replies" : [
        {
          "title": "답글1",
          "content": "내용1"
        },{
          "title": "답글2",
          "content": "내용2"
        },{
          "title": "답글3",
          "content": "내용3"
        }
      ]
    },
    {
      "title": "댓글3",
      "content": "내용3",
      "replies" : [
        {
          "title": "답글1",
          "content": "내용1"
        },{
          "title": "답글2",
          "content": "내용2"
        },{
          "title": "답글3",
          "content": "내용3"
        }
      ]
    }
  ];

  for (var i = 0; i < comments.length; i++) {
    console.log(comments[i].title + ' : ' + comments[i].content);

    var replies = comments[i].replies;
    for (var j = 0; j < replies.length; j++) {
      console.log('ㄴ' + replies[i].title + ' : ' + replies[i].content);
    }
  }

  res.send('respond with a resource');
});

module.exports = router;
