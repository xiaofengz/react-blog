var express = require('express');
var router = express.Router();
var URL = require('url'); //请求url模块
var User = require('./user'); //引入user.js
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getUserInfo',function(req,res,next){
  var user = new User();
  var params = URL.parse(req.url,true).query;

  if(params.id == '1'){
      user.name = "Evan";
      user.age = "23";
      user.city = "杭州";
  }else{
      user.name = "SPTING";
      user.age = "1";
     user.city = "杭州市";
  }

  var response = {status:1,data:user};
  res.send(JSON.stringify(response));
})
module.exports = router;
