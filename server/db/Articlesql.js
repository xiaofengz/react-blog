var ArticleSQL = {  
    insert:'INSERT INTO article(title,content,type,isPublish) VALUES(?,?,?,?)', 
    queryAll:'SELECT * FROM User',  
    getUserByInfo:'SELECT * FROM User WHERE username = ? AND password = ? ',
  };
module.exports = ArticleSQL;