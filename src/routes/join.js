var express = require('express');
var router = express.Router();
const pool = require('../database/pool')

router.get('/', function (req, res, next) {
    res.render('join', {title: '회원가입'});
});

router.post('/', (req, res) => {
    try {
        let { userId, userPwd, userNickname, userEmail } = req.body;

        let isUser = pool.query(`
            select count(*) as isUser from users where login_id = ?
        `, [userId])[0][0].isUser;
        
        let isNickname = pool.query(`
            select count(*) as isNickname from users where nickname = ?
        `, [userNickname])[0][0].isNickname;
    
        if (isUser > 0) {
            return res.status(409).json({message: "이미 사용 중인 아이디입니다."})
        }
    
        if (isNickname > 0) {
            return res.json({message: "이미 사용 중인 닉네임입니다."})
        }
    
        let data = pool.query(`
            insert into users (
                login_id
                ,passwd
                ,nickname
                ,email
                ,reg_dt
            ) values (
                ,?,?,?,?,now()
            )
        `, [userId, userPwd, userNickname, userEmail]);
        res.json({data: "성공"});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;