var express = require('express');
var router = express.Router();
var URL = require('url'); //请求url模块
// var User = require('./user'); //引入user.js
var User = require('../models/user.js')
var responseClient = require('../util/utils.js')
/* GET users listing. */

router.post('/login', function(req, res, next) {
  let {username, password} = req.body;
  console.log(username,password)
  if (!username) {
      responseClient(res, 400, 2, '用户名不可为空');
      return;
  }
  if (!password) {
      responseClient(res, 400, 2, '密码不可为空');
      return;
  }
  User.findOne({
      username,
      password
  }).then(userInfo => {
      if (userInfo) {
          //登录成功
          let data = {};
          data.username = userInfo.username;
          data.userType = userInfo.type;
          data.userId = userInfo._id;
          //登录成功后设置session
          req.session.userInfo = data;

          responseClient(res, 200, 0, '登录成功', data);
          return;
      } 
        responseClient(res, 200, 1, '用户名密码错误','');
  }).catch(err => {
      responseClient(res);
  })
})
module.exports = router;
