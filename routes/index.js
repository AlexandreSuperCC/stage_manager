var express = require('express');
var router = express.Router();
var sqlQuery = require("../lcMysql")
var cookieParser = require('cookie-parser')
var session = require("express-session");
const logger = require('../logs/logger.js');
var lcdir = require('../mkdir')

router.use(session({
  secret:"yuancaocc",
  cookie:{maxAge:1000*60*60},//60 minutes
  resave:true,
  saveUninitialized:true
}))

router.get('/check/logout',(req,res)=>{
  if(req.session){
    req.session.destroy(()=>{
      res.send("You are nowed logged out")
    })
  }else{
    res.send("no session to destroy")
  }
})

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

function isLogin(req, res, next){
  if(req.session.user==undefined){
    res.send("you should login<script>setInterval(()=>{location.href='/'},1000)</script>")
  }else{
    next()
  }
}

router.get('/check/stage',isLogin,async (req,res)=>{
  let strSql = "select * from stage_2021 order by 1 desc;"
  let resArr = await sqlQuery(strSql)
  res.render("allstage",{"stage":resArr})
})

router.post('/check', async (req, res)=>{

  let username = req.body.username
  let password = req.body.password
  arrLog = [req.connection.remoteAddress, req.socket.remoteAddress, req.body.username]//connection remote ip, backend socket ip
  logger.info(arrLog)//write into the log

  let strSql = "select * from user where username = ? and password = ?;"
  let arr = [username, password]
  let result = await sqlQuery(strSql, arr)
  if(result.length == 0){
    res.send("username or password incorrect, relogin please<script>setInterval(()=>{location.href='/check/stage'},1000)</script>")
  }else{
    req.session.user = username
    res.send("All good, stage info on<script>setInterval(()=>{location.href='/check/stage'},1000)</script>")
  }
})
router.post('/check/stage/input', isLogin, async (req, res)=>{
  let entreprise = req.body.entreprise
  let emploi = req.body.emploi 
  let competence = req.body.competence
  let information = req.body.information
  let ville = req.body.ville
  let lien = req.body.lien

  let strSql = "insert into stage_2021(entreprise, emploi, competence, information, ville, date, lien, status) values(?,?,?,?,?,now(),?,'sent');"
  let arr = [entreprise, emploi, competence, information, ville, lien]
  let result = await sqlQuery(strSql, arr)
  if(result){
    lcdir(entreprise).then((data)=>{//use .then to go
      console.log(data)
    })
    res.render("afterInput")
  }else{
    res.send("some errors occur")
  }
})

router.get('/check/stage/update', isLogin, async (req, res)=>{
  let numId = req.query.num
  let strSql = "update stage_2021 set date=now(), status='interviewed' where id=?;"
  let arr = [numId]
  let result = await sqlQuery(strSql, arr)
  if(result){
    res.render("afterUpdate")
  }else{
    res.send("some errors occur")
  }
})



module.exports = router;
