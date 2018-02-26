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
// 建立连接 增加一个用户信息 
if (param.id) {
    // 存在ID，则为update文章
    let updateTime = Date.parse(new Date());
    connection.query(ArticleSQL.updateArticle, [param.title,param.content,param.type,param.isPublish,updateTime,param.id], function(err, result) {
            if(result) {  
                 responseClient(res, 200, 1, '更新成功')
            } else {
                responseClient(res, 400, 2, '更新失败')
            }
         // 释放连接  
        //   connection.release();  
    
           });
        } else {
            // 新增文章
            connection.query(ArticleSQL.insert, [param.title,param.content,param.type,param.isPublish,updateTime], function(err, result) {
                    if(result) {  
                         responseClient(res, 200, 1, '添加成功')
                    } else {
                        responseClient(res, 400, 2, '添加失败')
                    }
                 // 释放连接  
                //   connection.release();  
            
                   });
        }

 });

// 加载首页文章列表
 router.post('/pullIndexArticle', function(req, res, next){
   // 从article表中获取文章
   connection.query(ArticleSQL.queryAll,  function(err, result) {
           if(result) {  
               let response = []
               result.map((item,i) => {
                   response[i] = {
                    id:result[i].id,
                    title:result[i].title,
                    content:result[i].content,
                    type:result[i].type,
                    isPublish:result[i].isPublish,
                    agree:result[i].agree,
                    commentNum:result[i].commentNum,
                    readNum:result[i].readNum,
                    author:{
                        name:result[i].author,
                        img:result[i].img,
                        updateTime:result[i].updateTime
                    }
                   }
               })
                responseClient(res, 200, 1, '拉取成功',response)
           } else {
               responseClient(res, 400, 2, '拉取失败')
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
            if(result) {  
                 responseClient(res, 200, 1, '成功',result)
            } else {
                responseClient(res, 400, 2, '失败')
            }
         // 释放连接  
        //   connection.release();  
    
           });
     });


// 加载当前用户文章列表
router.post('/pullUserArticle', function(req, res, next){
    // 从article表中获取文章
    var param = req.body; 
    
    connection.query(ArticleSQL.queryAll , function(err, result) {
            if(result) {  
                 responseClient(res, 200, 1, '获取当前用户文章成功',result)
            } else {
                responseClient(res, 400, 2, '获取当前用户文章失败')
            }
         // 释放连接  
        //   connection.release();  
    
           });
     });
     

// 删除当前文章
router.post('/deleteArticle', function(req, res, next){
    // 从article表中获取文章
    var param = req.body; 
    
    connection.query(ArticleSQL.deleteArticle ,[param.id], function(err, result) {
            if(result) {  
                 responseClient(res, 200, 1, '成功',result)
            } else {
                responseClient(res, 400, 2, '失败')
            }
         // 释放连接  
        //   connection.release();  
    
           });
     });
     
module.exports = router;
