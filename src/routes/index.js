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
  ,reg_user_id as authorId
  ,reg_user_name as author
  ,date_format(reg_date, '%Y.%m.%d') as date
  ,recommendation_cnt as voteCount
  ,type as type
  from movie
  limit ? offset ?`, [size, page * size]);

  let list = data[0];
  for (var i = 0; i < list.length; i++) {
    var type = list[i].type;
    switch (type) {
      case "REVIEW":
        list[i].type = "리뷰";
        break;
      case "FREE":
        list[i].type = "자유";
        break;
      case "USA":
        list[i].type = "미국 영화";
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