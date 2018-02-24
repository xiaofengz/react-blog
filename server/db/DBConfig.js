// const mongoose = require("mongoose"); //引入mongoose

// const db = mongoose.connection;
// db.on('error', function callback() { //监听是否有异常
//     console.log("Connection error");
// });
// db.once('open', function callback() { //监听一次打开
//     //在这里创建你的模式和模型
//     console.log('connected!');
// });

// mongoose.connect('mongodb://localhost/todo'); //连接到mongoDB的todo数据库
// //该地址格式：mongodb://[username:password@]host:port/database[?options]
// //默认port为27017  
// module.exports = mongoose;

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '123456',
//   database : 'test'
// });
 
// connection.connect();
// module.exports = mysql;
// // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// //   if (error) throw error;
// //   console.log('The solution is: ', results[0].solution);
// // });
module.exports =
{  
            mysql: {   
                        host: '127.0.0.1',     
                        user: 'root',   
                        password: '123456',  
                        database:'blog', // 前面建的user表位于这个数据库中 
                         port: 3306  
                   }
};