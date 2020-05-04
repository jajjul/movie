var express = require('express');
var router = express.Router();
const pool = require('../database/pool')

/* index.ejs <form action="movies"> */
router.get('/', async (req, res, next) => {
  let size = Number(req.query.size);
  let page = Number(req.query.page);
  let order = req.query.order;

  // 첫페이지
  if (isNaN(size)) {
    size = 10
  }
  if (isNaN(page)) {
    page = 0
  }
  if (order == undefined) {
    order = 'movie_id'
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
  order by ${order} desc
  limit ? offset ?`, [size, page * size]);

  let list = data[0];
  for (var i = 0; i < list.length; i++) {
    var type = list[i].type;
    switch (type) {
      case "review":
        list[i].type = "리뷰";
        break;
      case "kor":
        list[i].type = "한국 영화";
        break;
      case "USA":
        list[i].type = "미국 영화";
        break;
      case "jap":
        list[i].type = "일본 영화";
        break;
      case "chn":
          list[i].type = "중국 영화";
          break;  
      case "discuss":
          list[i].type = "토론";
          break;
      case "free":
          list[i].type = "자유";
          break;
      case "others":
          list[i].type = "기타 외화";
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

router.get('/:regType', async (req, res, next) => {
  let size = Number(req.query.size);
  let page = Number(req.query.page);
  let regType = req.params.regType;
  let order = req.query.order;

  // 첫페이지
  if (isNaN(size)) {
    size = 10
  }
  if (isNaN(page)) {
    page = 0
  }
  if (order == undefined) {
    order = 'movie_id'
  }

  const count = await pool.query(`
  select count(*) as total
  from movie where reg_type = ?`, [regType]);
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
  where reg_type = ?
  order by ${order} desc
  limit ? offset ?`, [regType, size, page * size]);

  let list = data[0];
  for (var i = 0; i < list.length; i++) {
    var type = list[i].type;
    switch (type) {
      case "review":
        list[i].type = "리뷰";
        break;
      case "kor":
        list[i].type = "한국 영화";
        break;
      case "USA":
        list[i].type = "미국 영화";
        break;
      case "jap":
        list[i].type = "일본 영화";
        break;
      case "chn":
          list[i].type = "중국 영화";
          break;  
      case "discuss":
          list[i].type = "토론";
          break;
      case "free":
          list[i].type = "자유";
          break;
      case "others":
          list[i].type = "기타 외화";
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
