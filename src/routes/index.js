var express = require('express');
var router = express.Router();
const pool = require('../database/pool')

/* GET home page. */
router.get('/', async (req, res, next) => {
  let size = Number(req.query.size);
  let page = Number(req.query.page);

  // 첫페이지
  if (isNaN(size)) {
    size = 10
  }
  if (isNaN(page)) {
    page = 0
  }

  const count = await pool.query(`
  select count(*) as total
  from movie`);
  const total = count[0][0].total;

  console.log(count);
  console.log(total);

  const data = await pool.query(`
  select
  movie_id as movieId
  ,title as contentTitle
  ,comment_cnt as commentCount
  ,reg_user_id as userId
  ,reg_nickname as author
  ,date_format(reg_dt, '%Y.%m.%d') as date
  ,vote_cnt as voteCount
  ,reg_type as type
  from movie
  limit ? offset ?`, [size, page * size]);

  let list = data[0];
  for (var i = 0; i < list.length; i++) {
    var type = list[i].type;
    switch (type) {
      case "리뷰":
        list[i].type = "리뷰";
        break;
      case "한국 영화":
        list[i].type = "한국 영화";
        break;
      case "미국 영화":
        list[i].type = "미국 영화";
        break;
      case "일본 영화":
        list[i].type = "일본 영화";
        break;
      case "중국 영화":
          list[i].type = "중국 영화";
          break;  
      case "토론":
          list[i].type = "토론";
          break;
      case "자유":
          list[i].type = "자유";
          break;
      default:
        list[i].type = "";
        break;
    }
  }

  return res.render('index', {
    title: '영화토크방', 
    page: page,
    size: size,
    total: total,
    list: list
  });
});

module.exports = router;