var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var ArticleSQL = require('../db/Articlesql');
var responseClient = require('../util/utils.js')
// 使用DBConfig.js的配置信息创建一个MySQL连接池
// var pool = mysql.createPool( dbConfig.mysql );
var connection = mysql.createConnection(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function (res, ret) {
     if(typeof ret === 'undefined') { 
          res.json({     code:'-200',     msg: '操作失败'   
        }); 
    } else { 
      res.json(ret); 
  }};


// 发布文章
router.post('/addArticle', function(req, res, next){
 // 从连接池获取连接 
var param = req.body.obj; 
console.log(param)
// 建立连接 增加一个用户信息 
connection.query(ArticleSQL.insert, [param.title,param.content,param.type,param.isPublish], function(err, result) {
    console.log("result,err",err,result)
        if(result) {  
             responseClient(res, 200, 1, '添加成功')
        } else {
            responseClient(res, 400, 2, '添加失败')
        }
     // 释放连接  
    //   connection.release();  

       });
 });

// 加载首页文章列表
 router.post('/pullIndexArticle', function(req, res, next){
   // 从article表中获取文章
   connection.query(ArticleSQL.queryAll,  function(err, result) {
       console.log("result,err",err,result)
           if(result) {  
                responseClient(res, 200, 1, '添加成功',result)
           } else {
               responseClient(res, 400, 2, '添加失败')
           }
        // 释放连接  
       //   connection.release();  
   
          });
    });

// 加载单篇文章列表
router.post('/pullArticle', function(req, res, next){
    // 从article表中获取文章
    var param = req.body; 
    
    connection.query(ArticleSQL.queryArticle, [param.id], function(err, result) {
        console.log("result,err",err,result)
            if(result) {  
                 responseClient(res, 200, 1, '添加成功',result)
            } else {
                responseClient(res, 400, 2, '添加失败')
            }
         // 释放连接  
        //   connection.release();  
    
           });
     });
    
module.exports = router;
