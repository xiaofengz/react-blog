var UserSQL = {  
    insert:'INSERT INTO User(username,password) VALUES(?,?)', 
    queryAll:'SELECT * FROM User',  
    getUserByInfo:'SELECT * FROM User WHERE username = ? AND password = ? ',
    findUser:'SELECT * FROM User WHERE id = ?',
    updateUser:'UPDATE User SET img = ?,nickname = ?,username = ?,sex = ?,personal_intro = ?,personal_website = ? WHERE id = ?',
  };
module.exports = UserSQL;