var UserSQL = {  
    insert:'INSERT INTO User(username,password) VALUES(?,?)', 
    queryAll:'SELECT * FROM User',  
    getUserByInfo:'SELECT * FROM User WHERE username = ? AND password = ? ',
  };
module.exports = UserSQL;