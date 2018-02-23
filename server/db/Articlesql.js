var ArticleSQL = {  
    insert:'INSERT INTO article(title,content,type,isPublish) VALUES(?,?,?,?)', 
    queryAll:'SELECT * FROM article',  
    queryArticle:'SELECT * FROM article WHERE id = ? ',
    getUserByInfo:'SELECT * FROM User WHERE username = ? AND password = ? ',
  };
module.exports = ArticleSQL;